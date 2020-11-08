// Copyright 2018-2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const AWS = require('aws-sdk');
const ws = require('ws');
const { Server } = require('./Server');

const ddb = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10', region: process.env.AWS_REGION });

const s3 = new AWS.S3({ region: process.env.AWS_REGION });

const sessionLengthMs = 1000 * 60 * 5;
const minimumGameLength = 10 * 1000;
exports.handler = async event => {

  const now = Date.now();
  const sessionId = now - (now % sessionLengthMs);
  const managerKey = `session-${sessionId}/mgr`;
  const managerSecret = `${Math.random()}`;

  const nextSessionId = sessionId + sessionLengthMs;
  if (Date.now() + minimumGameLength > nextSessionId) {
    return { statusCode: 200, body: 'Too close to next session, try again' };
  }

  try {
    await s3.headObject({
      Bucket: process.env.BUCKET_NAME,
      Key: managerKey,
    }).promise();
    console.log('Manager already running for session', sessionId, 'exiting');
    return { statusCode: 200, body: 'Already started' };
  } catch (err) {
    // Doesn't exist, ok!
  }

  try {
    console.log('Putting to', process.env.BUCKET_NAME);
    await s3.putObject({
      Bucket: process.env.BUCKET_NAME,
      Key: managerKey,
      // ACL:'public-read', // <-- very unwanted
      Body: managerSecret
    }).promise();
  } catch (second) {
    console.warn('Could not create obj', second);
    throw second;
  }

  await new Promise(res => setTimeout(res, 1000));

  const bod = (await s3.getObject({
    Bucket: process.env.BUCKET_NAME,
    Key: managerKey,
  }).promise()).Body.toString('utf-8');

  if (bod !== managerSecret) {
    // Other manager started.
    return { statusCode: 200, body: 'Some other manager started at the same time' };
  }

  let lastKnownLeader = null;

  const sleep = nextSessionId - Date.now();


  console.log('connecting to websocket...');
  const socket = new ws("wss://qnrk3f4ghb.execute-api.eu-central-1.amazonaws.com/Prod?agent=kevlanchebot", {
    perMessageDeflate: false, // TODO needed?
  });
  // socket.binaryType = 'arraybuffer';

  const incomingMessages = [];
  let numberOfPlayers = 0;
  const pidToColors = {};
  let lastReceivedMessage = null;
  const pidToLastIncomsingKlMessageTime = {};
  const server = Server({
    postMessage: data => {
      console.log('outbound payload PLAIN:', data);
      const payload = new TextDecoder().decode(data);
      console.log('outbound payload ENCODED:', payload);
      socket.send(JSON.stringify({
        action: 'sendmessage',
        target: 'client',
        type: 'kl',

        payload,
      }));
    },
    receiveIncomingMessage: () => {
      const ret = incomingMessages.shift() || null;
      lastReceivedMessage = ret;
      return ret && ret.data;
    },
    getLastIncomingMessageOwner: () => lastReceivedMessage && lastReceivedMessage.pid,
    reportLeader: (leader) => {
      lastKnownLeader = leader;
    },
  });
  socket.on('open', function open() {
    console.log('websocket connected!');
    // TODO maybe send greeting to all clients
  });

  socket.on('message', function incoming(data) {
    const { target, salt, type, payload, pid } = JSON.parse(data);
    if (target !== 'server') {
      return;
    }

    if (!pidToColors[pid]) {
      ++numberOfPlayers;
      pidToColors[pid] = numberOfPlayers;
    }

    if (type === 'kl') {
      const lastMessage = pidToLastIncomsingKlMessageTime[pid];
      if (lastMessage && (Date.now() - lastMessage) <= 5000) {
        // Reject message due to "slow mode"
        return;
      }
      socket.send(JSON.stringify({
        action: 'sendmessage',
        target: 'client',
        type: 'meta',
        playerColor: pidToColors[pid],
        playerName: pid,
        managerSecret,
      }));
      pidToLastIncomsingKlMessageTime[pid] = Date.now();
      incomingMessages.push({
        data: new TextEncoder().encode(payload),
        pid: pidToColors[pid],
      });
      try {
        server.call();
      } catch (e) {
        console.warn('Err on server side:', e);
        throw e;
      }
    } else if (type === 'meta') {
      // const now = Date.now();
      // const sessionId = now - (now % sessionLengthMs);

      socket.send(JSON.stringify({
        action: 'sendmessage',
        target: 'client',
        type: 'meta',
        time: Date.now() % sessionId,
        sessionId,
        salt,
        managerSecret,
      }));
    }
  });

  // socket.onopen
  const autoRunner = setInterval(() => {
    server.call();
  }, 100);

  await new Promise(res => setTimeout(res, sleep));

  clearInterval(autoRunner);

  await s3.deleteObject({
    Bucket: process.env.BUCKET_NAME,
    Key: managerKey
  }).promise();
  console.log('Session', sessionId, 'done, closing');

  if (lastKnownLeader !== null) {
    const now = Date.now();
    const today = now - (now % (1000 * 60 * 60 * 24) );

    let currLeaderboard;
    try {
      currLeaderboard = JSON.parse(
        (await s3.getObject({
          Bucket: process.env.BUCKET_NAME,
          Key: 'leaderboard'
        }).promise()).Body
      );
    } catch (e) {

    }

    if (!currLeaderboard || !currLeaderboard.day !== today) {
      currLeaderboard = {
        day: today,
        winners: {}
      };
    }
    const winnerName = Object.keys(pidToColors).find(name => pidToColors[name] === lastKnownLeader);
    if (winnerName) {
      currLeaderboard.winners[winnerName] = (currLeaderboard.winners[winnerName] || 0) + 1;
      await s3.putObject({
        Bucket: process.env.BUCKET_NAME,
        Key: 'leaderboard',
        Body: JSON.stringify(currLeaderboard),
        CacheControl: 'no-store',
        ACL: 'public-read',
      }).promise();
    }
  }

  socket.close();

  return { statusCode: 200, body: 'Ran normally'};



  // const putParams = {
  //   TableName: process.env.TABLE_NAME,
  //   Item: {
  //     connectionId: event.requestContext.connectionId
  //   }
  // };

  // try {
  //   await ddb.put(putParams).promise();
  // } catch (err) {
  //   return { statusCode: 500, body: 'Failed to connect: ' + JSON.stringify(err) };
  // }

  // return { statusCode: 200, body: 'Connected.' };
};
