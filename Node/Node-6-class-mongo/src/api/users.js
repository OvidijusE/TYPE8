const express = require('express');
const { dbClient } = require('../config');
const { findMalesDb, findFemalesDb, findUsersByName, findUsersByAge } = require('../model/usersModel');

const usersRoute = express.Router();
const dbName = 'node7';
const collName = 'users';

usersRoute.get('/users', async (req, res) => {
  try {
    // prisijungsim prie mongoDB
    await dbClient.connect();
    console.log('Open connection');
    // atliksim veiksma (gauti duomenis, irasyti, atnaujinti)
    const resource = dbClient.db(dbName).collection(collName);
    const usersArr = await resource.find().toArray();
    console.log('usersArr ===', usersArr);
    res.json(usersArr);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Something went wrong');
  } finally {
    //   uzdaryti prisijungima
    await dbClient.close();
    console.log('Close connection');
  }
});

usersRoute.post('/users', async (req, res) => {
  try {
    const { name, town, age } = req.body;
    // if (name.length < 1) console.log('too short');
    // prisijungsim prie mongoDB
    await dbClient.connect();
    console.log('Open connection');
    // atliksim veiksma (gauti duomenis, irasyti, atnaujinti)

    const inserResult = await dbClient.db('cao_intro').collection('users').insertOne({ name, town, age });
    console.log('usersArr ===', inserResult);
    res.json(inserResult);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Something went wrong');
  } finally {
    //   uzdaryti prisijungima
    await dbClient.close();
    console.log('Close connection');
  }
});

// GET /api/user/students - atrenkam tik studentus
// usersRoute.get('/users/students', async (req, res) => {
//   try {
//     // prisijungsim prie mongoDB
//     await dbClient.connect();
//     console.log('Open connection');
//     // atliksim veiksma (gauti duomenis, irasyti, atnaujinti)
//     const resource = dbClient.db(dbName).collection(collName);
//     const usersArr = await resource.find({ isStudent: true }).toArray();
//     console.log('usersArr ===', usersArr);
//     res.json(usersArr);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json('Something went wrong');
//   } finally {
//     //   uzdaryti prisijungima
//     await dbClient.close();
//     console.log('Close connection');
//   }
// });

// mokytojo sprendimas
// eslint-disable-next-line no-use-before-define
usersRoute.get('/users/students', studentsController);

async function studentsController(req, res) {
  try {
    const query = { isStudent: true };
    await dbClient.connect();
    const resource = dbClient.db(dbName).collection(collName);
    const studArr = await resource.find(query).toArray();
    res.json(studArr);
  } catch (error) {
    console.log('sutdentsController === error', error);
  } finally {
    await dbClient.close();
  }
}

// GET /api/users/males - atrenkam tik vyrus
usersRoute.get('/users/males', async (req, res) => {
  console.log('usersRoute.get /users/males ran ===');
  const malesArr = await findMalesDb();

  if (malesArr === false) {
    res.status(500).json('Something went wrong');
    return;
  }

  res.json(malesArr);
});

// GET /api/users/females - atrenkam tik moteris
usersRoute.get('/users/females', async (req, res) => {
  console.log('usersRoute.get /users/females ran ===');
  const femalesArr = await findFemalesDb();

  if (femalesArr === false) {
    res.status(500).json('Something went wrong');
    return;
  }

  res.json(femalesArr);
});

// GET /api/users/name/James - atrenkam useri vardu James (james dynamic)
usersRoute.get('/users/name/:name', async (req, res) => {
  // const name = req.params.name;
  const { name } = req.params;
  const namesArr = await findUsersByName(name);
  if (namesArr === false) {
    res.status(500).json('not work');
  }
  // findUserByName(name);
  res.json(namesArr);
});

// GET /api/user/age/gt/20 - atrenkam zmones vyresnius nei 20 (20 dinaminis segmentas kuriam galim paduoti koki norim skaiciu)
usersRoute.get('/users/age/gt/:age', async (req, res) => {
  const { age } = req.params;
  const usersArr = await findUsersByAge(age);
  if (usersArr === false) {
    res.status(500).json('not ok');
    return;
  }
  res.json(usersArr);
});
// extra// GET /api/user/names/James,Jane,Abby - gaunam visus zmones kuriu vardai yra surasyti per kableli po names/

module.exports = usersRoute;
