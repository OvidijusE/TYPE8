const express = require('express');
const { dbClient } = require('../config');

const productsRoutes = express.Router();

// 5. Sukurkite dar vieną route GET /products/, kuris paduos visus produktus su jų kategorijom (t.y. pavadinimas, kaina, kategorija - pvz. iPhone 7, 370.00, phones).
productsRoutes.get('/products', async (req, res) => {
  try {
    await dbClient.connect();
    const collection = dbClient.db('cao9').collection('products');
    const productsArr = await collection.find().toArray();
    res.status(200).json(productsArr);
  } catch (error) {
    console.error('error in get categories', error);
    res.status(500).json('something is wrong');
  } finally {
    await dbClient.close();
  }
});

module.exports = productsRoutes;
