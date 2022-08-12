const express = require('express');
const { dbClient } = require('../config');

const carsRoute = express.Router();

carsRoute.get('/cars', async (req, res) => {
  try {
    // prisijungiam prie mongo db
    await dbClient.connect();
    // atliekam veiksma
    const carsArr = await dbClient.db('node-cao6-demo1').collection('cars').find().toArray();
    res.json(carsArr);
  } catch (error) {
    res.status(500).json('Something is wrong');
  } finally {
    // uzdaryti prisijungima
    await dbClient.close();
  }
});

module.exports = carsRoute;
