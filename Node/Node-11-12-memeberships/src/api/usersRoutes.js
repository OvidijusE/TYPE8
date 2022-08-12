const express = require('express');
const { ObjectId } = require('mongodb');
const { dbClient } = require('../config');

const usersRoutes = express.Router();

// ROUTES
usersRoutes.get('/users', async (req, res) => {
  try {
    await dbClient.connect();
    const collection = dbClient.db('memberships11').collection('users');
    const servicesArr = await collection.find().toArray();
    res.json(servicesArr);
  } catch (error) {
    console.error('error in get users', error);
    res.status(500).json('something is wrong');
  } finally {
    await dbClient.close();
  }
});

usersRoutes.post('/users', async (req, res) => {
  try {
    const newUserObj = req.body;
    newUserObj.service_id = new ObjectId(newUserObj.service_id);
    await dbClient.connect();
    const collection = dbClient.db('memberships11').collection('users');
    const insertUsers = await collection.insertOne(newUserObj);
    res.status(201).json(insertUsers);
  } catch (error) {
    console.error('error in post users', error);
    res.status(500).json('something is wrong');
  } finally {
    await dbClient.close();
  }
});

// POST
usersRoutes.post('/users', async (req, res) => {
  try {
    const newUserObj = req.body;
    newUserObj.service_id = new ObjectId(newUserObj.service_id);
    /// validation
    await dbClient.connect();

    const collection = dbClient.db('memberships11').collection('users');
    const insertRezult = await collection.insertOne(newUserObj);
    if (insertRezult.insertedId) {
      console.log('insert ok');
      // jei siunciam tik status tai sendStatus()
      res.sendStatus(201);
      return;
    }
    throw new Error('insertRezult.insertedId false');
  } catch (error) {
    console.error('error post user', error);
    res.status(500).json('something is wrong');
  } finally {
    await dbClient.close();
  }
});

// CommonJS
module.exports = {
  usersRoutes,
};
