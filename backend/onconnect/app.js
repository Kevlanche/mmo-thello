// Copyright 2018-2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10', region: process.env.AWS_REGION });

const lambda = new AWS.Lambda({ region: process.env.AWS_REGION });
const s3 = new AWS.S3({ region: process.env.AWS_REGION });

exports.handler = async event => {
  const { agent } = event.queryStringParameters || {};
  if (!agent) {
    return { statusCode: 400, body: 'BadRequest' };
  }
  // TODO treat agent values as jwt tokens, validate them.

  console.log('handling onConnect..', event);
  const putParams = {
    TableName: process.env.TABLE_NAME,
    Item: {
      connectionId: event.requestContext.connectionId
    }
  };

  try {
    await ddb.put(putParams).promise();
  } catch (err) {
    return { statusCode: 500, body: 'Failed to connect: ' + JSON.stringify(err) };
  }

  console.log('starting session..');
  await lambda.invoke({
    FunctionName: process.env.SESSION_FUNCTION_NAME,
    InvocationType: 'Event'
  }).promise();

  return { statusCode: 200, body: 'Connected.' };
};
