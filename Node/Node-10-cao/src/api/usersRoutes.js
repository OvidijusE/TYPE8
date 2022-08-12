const express = require('express');
const { dbClient } = require('../config');

const userRoutes = express.Router();

// ROUTES
// 1.GET /users/ atsiųs visus vartotojus;
userRoutes.get('/users', async (req, res) => {
  try {
    // prisijungti
    await dbClient.connect();
    // atlikti veiksma
    console.log('connected');
    const collection = dbClient.db('cao10').collection('users');
    const usersArr = await collection.find().toArray();
    res.status(200).json(usersArr);
  } catch (error) {
    console.error('error in get users', error);
    res.status(500).json('something is wrong');
  } finally {
    // uzdaryti connection
    await dbClient.close();
  }
});

// 2.POST /users/ įrašys vieną vartotoją;
userRoutes.post('/users', async (req, res) => {
  try {
    // prisijungti
    await dbClient.connect();
    // atlikti veiksma
    console.log('connected');
    const newUserObj = req.body;
    const collection = dbClient.db('cao10').collection('users');
    const result = await collection.insertOne(newUserObj);
    res.status(200).json(result);
  } catch (error) {
    console.error('error in get users', error);
    res.status(500).json('something is wrong');
  } finally {
    // uzdaryti connection
    await dbClient.close();
  }
});

module.exports = {
  userRoutes,
};
