const express = require('express');
const { dbClient } = require('../config');

const userRoutes = express.Router();

const dbName = 'node8_cao';
const collName = 'pets';

// get
userRoutes.get('/pets', async (req, res) => {
  try {
    await dbClient.connect();
    const resource = await dbClient.db(dbName).collection(collName);
    const petsArr = await resource.find().toArray();
    res.json(petsArr);
  } catch (error) {
    console.log('cannot get pets', error);
    res.status(500).json('bad');
  } finally {
    await dbClient.close();
  }
});

// post
userRoutes.post('/pets', async (req, res) => {
  try {
    const { name, type, age } = req.body;
    await dbClient.connect();
    const insert = await dbClient.db(dbName).collection(collName).insertOne({ name, type, age });
    res.json(insert);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('could not post');
  } finally {
    await dbClient.close();
  }
});

// sort
userRoutes.get('/pets/sort-age/:sortOrder', async (req, res) => {
  try {
    const { sortOrder } = req.params;
    let order = 1;
    order = sortOrder === 'Age: (Asc)' ? -1 : 1;
    const options = {
      sort: { age: order },
    };

    await dbClient.connect();
    const resource = await dbClient.db(dbName).collection(collName);
    const petsArr = await resource.find({}, options).toArray();
    res.json(petsArr);
  } catch (error) {
    console.log('error in sort pets', error);
    res.status(500).json('wrong');
  } finally {
    await dbClient.close();
  }
});

// filter by dog gal statinis geriau?
// userRoutes.get('/pets/type/:dog', async (req, res) => {
//   try {
//     await dbClient.connect();
//     const resource = await dbClient.db(dbName).collection(collName);
//     const dogsArr = await resource.find({}).filter({ type: 'Dog' }).toArray();
//     res.json(dogsArr);
//   } catch (error) {
//     console.log('error in sort by dogs', error);
//     res.status(500).json('bad');
//   } finally {
//     await dbClient.close();
//   }
// });

module.exports = {
  userRoutes,
};
