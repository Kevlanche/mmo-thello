// Copyright 2018-2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const AWS = require('aws-sdk');
const ws = require('ws');

const ddb = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10', region: process.env.AWS_REGION });

const s3 = new AWS.S3({ region: process.env.AWS_REGION });

const sessionLengthMs = 1000 * 60; // * 5;
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

  console.log('STARTED MANAGER', managerSecret);

  const sleep = nextSessionId - Date.now();
  console.log('Sleeping for', sleep, 'ms');

  console.log('connecting to websocket...');
  const socket = new ws("wss://qnrk3f4ghb.execute-api.eu-central-1.amazonaws.com/Prod?agent=kevlanchebot", {
    perMessageDeflate: false, // TODO needed?

  });
  socket.on('open', function open() {
    console.log('websocket connected!');
    // socket.send(JSON.stringify({ 'action': 'sendmessage', 'type': 'started', sessionId }));
  });

  socket.on('message', function incoming(data) {
    console.log('onMessage:', data);
    const { target, salt } = JSON.parse(data);
    if (target === 'server') {
      socket.send(JSON.stringify({
        action: 'sendmessage',
        target: 'client',
        sessionId,
        salt,
        managerSecret,
      }));
    }
  });

  // socket.onopen

  await new Promise(res => setTimeout(res, sleep));

  console.log('Sleep done.. deleting mgrKey');
  await s3.deleteObject({
    Bucket: process.env.BUCKET_NAME,
    Key: managerKey
  }).promise();
  console.log('Sleep done.. deleted mgrKey, closing', sessionId);

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
