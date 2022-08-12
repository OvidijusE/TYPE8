const express = require('express');
const { dbClient } = require('../config');

const userRoutes = express.Router();

const dbName = 'node8_cao';
const collName = 'pets';

// 1.GET “/pets” paduoda visus gyvūnus.

// Routes
userRoutes.get('/pets', async (req, res) => {
  try {
    await dbClient.connect();
    const resource = await dbClient.db(dbName).collection(collName);
    const petsArr = await resource.find().toArray();
    res.json(petsArr);
    console.log('connected');
  } catch (error) {
    console.log('error in get pets', error);
    res.status(500).json('bad');
  } finally {
    await dbClient.close();
  }
});

// 2. POST “/pets” įkelia vieną gyvūną.
userRoutes.post('/pets', async (req, res) => {
  try {
    const { name, type, age } = req.body;
    await dbClient.connect();
    const insert = await dbClient.db(dbName).collection(collName).insertOne({ name, type, age });
    res.json(insert);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Could not post pets');
  } finally {
    await dbClient.close();
  }
});

// eslint-disable-next-line max-len
// 4. GET by age descending “/pets/byoldest”, kuris paduoda visus gyvūnus, nuo seniausio iki jauniausio.

userRoutes.get('/pets/byoldest', async (req, res) => {
  try {
    await dbClient.connect();
    const data = await dbClient.db(dbName).collection(collName);
    const petsArr = await data.find({}).sort({ age: -1 }).toArray();
    res.json(petsArr);
  } catch (error) {
    console.log('error in get pets byoldest', error);
    res.status(500).json('very bad');
  } finally {
    await dbClient.close();
  }
});

// 3. GET by type “/pets/:type”, kuris dinaminis ir paduoda įrašyto tipo gyvūnus (pvz tik šunis)
userRoutes.get('/pets/:type', async (req, res) => {
  try {
    const { type } = req.params;
    await dbClient.connect();
    const data = await dbClient.db(dbName).collection(collName);
    const petsArr = await data.find({}).filter({ type }).toArray();
    res.json(petsArr);
  } catch (error) {
    console.log('error in get pets by type', error);
    res.status(500).json('not good');
  } finally {
    await dbClient.close();
  }
});

module.exports = {
  userRoutes,
};
