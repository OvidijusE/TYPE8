const express = require('express');
const { dbClient } = require('../config');

const categoriesRoutes = express.Router();

// 4. Sukurkite NodeJS Express REST serverį, kuris turės GET'ą /categories ir paduos visas kategorijas.
categoriesRoutes.get('/categories', async (req, res) => {
  try {
    await dbClient.connect();
    const collection = dbClient.db('cao9').collection('categories');
    const categoriesArr = await collection.find().toArray();
    res.status(200).json(categoriesArr);
  } catch (error) {
    console.error('error in get categories', error);
    res.status(500).json('something is wrong');
  } finally {
    await dbClient.close();
  }
});

// 6. Sukurkite dar vieną route GET /categoryvalue/, šis paduos kiekvienos kategorijos produktų kainos sumą, pvz:
categoriesRoutes.get('/categories/values', async (req, res) => {
  try {
    await dbClient.connect();
    const collection = dbClient.db('cao9').collection('categories');
    const categoriesArr = await collection.find().toArray();
    res.status(200).json(categoriesArr);
  } catch (error) {
    console.error('error in get categories', error);
    res.status(500).json('something is wrong');
  } finally {
    await dbClient.close();
  }
});

module.exports = categoriesRoutes;
