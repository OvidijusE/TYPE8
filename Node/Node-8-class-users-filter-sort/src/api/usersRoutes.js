const express = require('express');
const { dbClient } = require('../config');

const userRoutes = express.Router();

// ROUTES
userRoutes.get('/users', async (req, res) => {
  try {
    // prisijungti
    await dbClient.connect();
    // atlikti veiksma
    // parsisiusti visus userius is node7 ir grazinti json [] formatu
    const collection = await dbClient.db('node7').collection('users');
    const userArr = await collection.find().toArray();
    console.log('connected');
    res.json(userArr);
  } catch (error) {
    console.error('error in get users', error);
    res.status(500).json('something is wrong');
  } finally {
    // uzdaryti connection
    await dbClient.close();
  }
});

// GET api/user/sort-age/:sortOrder
userRoutes.get('/users/sort-age/:sortOrder', async (req, res) => {
  try {
    const { sortOrder } = req.params;
    let order = 1;
    order = sortOrder === 'DESC' ? -1 : 1;
    const options = {
      sort: { age: order },
    };
    // prisijungti
    await dbClient.connect();
    // atlikti veiksma
    // parsisiusti visus userius is node7 ir grazinti json [] formatu
    const collection = await dbClient.db('node7').collection('users');
    const userArr = await collection.find({}, options).toArray();
    console.log('connected');
    res.json(userArr);
  } catch (error) {
    console.error('error in get users', error);
    res.status(500).json('something is wrong');
  } finally {
    // uzdaryti connection
    await dbClient.close();
  }
});

// GET /api/users/students - parsiuncia tik studentus
userRoutes.get('/users/students', async (req, res) => {
  try {
    await dbClient.connect();
    const collection = await dbClient.db('node7').collection('users');
    const studsArr = await collection.find().toArray();
    res.json(studsArr);
  } catch (error) {
    console.error('could get students', error);
    res.status(500).json('not good');
  } finally {
    await dbClient.close();
  }
});

// front mygtukas "show students" paspaude parsiunciam tik studentus

// prisideti 3 skirtingu miestu, po viena kiekvienam studentui
// GET /api/users/town/London - parsiuncia tik is to miesto

module.exports = {
  userRoutes,
};
