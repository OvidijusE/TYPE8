const express = require('express');
const { dbClient } = require('../config');

const userRoute = express.Router();
const dbName = 'node7';
const collName = 'people';

userRoute.get('/', async (req, res) => {
  try {
    await dbClient.connect();
    const resource = dbClient.db(dbName).collection(collName);
    const userArr = await resource.find().toArray();
    res.json(userArr);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Not work');
  } finally {
    await dbClient.close();
  }
});

userRoute.post('/people', async (req, res) => {
  try {
    await dbClient.connect();
    const result = await dbClient
      .db(dbName)
      .collection(collName)
      .insertOne({ name: 'Vardenis', lastName: 'Pavardenis', age: 14 });
    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Not work');
  } finally {
    await dbClient.close();
  }
});

module.exports = {
  userRoute,
};
