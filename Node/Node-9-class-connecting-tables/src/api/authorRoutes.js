const express = require('express');
const { ObjectId } = require('mongodb');
const { dbClient } = require('../config');
const { getArrayDb } = require('../helper');

const authorRoutes = express.Router();

// routes
// POST /api/author - sukuria nauja autoriu
authorRoutes.post('/author', async (req, res) => {
  try {
    // prisijungti
    await dbClient.connect();
    // atlikti veiksma
    console.log('connected');
    // paimti gautus duomenis
    console.log(' req.body ===', req.body);
    const newAuthorObj = req.body;
    // kai gaunam _id string versija o reikia irasyti ObjectId tipo irasa.
    // paverciam string _id i ObjectId su ObjectId(string)
    newAuthorObj.bookId = ObjectId(newAuthorObj.bookId);
    console.log('newAuthorObj.bookId; ===', ObjectId(newAuthorObj.bookId));
    // su jais sukurti nauja knyga
    const collection = dbClient.db('libary').collection('authors');
    const insertResult = await collection.insertOne(newAuthorObj);
    res.status(201).json(insertResult);
  } catch (error) {
    console.error('error in post authors', error);
    res.status(500).json('something is wrong');
  } finally {
    // uzdaryti prisijungima
    await dbClient.close();
  }
});
// GET /api/author - gauti visus autorius
authorRoutes.get('/author', async (req, res) => {
  const authorsArr = await getArrayDb('authors');
  if (authorsArr === false) {
    res.status(500).json('Something went wrong');
    return;
  }
  res.json(authorsArr);
});
// GET /api/author/:authorId gauti konkretu autoriu

// PATCH /api/author/:authorId - atnaujinti varda
authorRoutes.patch('/author/:authorId', async (req, res) => {
  // updateOne({filterObj/query}, {$set: {name: 'James'}})
  try {
    const { authorId } = req.params;
    const { newName } = req.body;
    // prisijungti
    await dbClient.connect();
    // atlikti veiksma
    console.log('connected');
    // atnaujinti varda
    const collection = dbClient.db('libary').collection('authors');
    const updateResult = await collection.updateOne(
      { _id: ObjectId(authorId) },
      { $set: { name: newName } }
    );
    res.status(200).json(updateResult);
  } catch (error) {
    console.error('error in updating author name', error);
    res.status(500).json('something is wrong');
  } finally {
    // uzdaryti prisijungima
    await dbClient.close();
  }
});
// {newName : 'James bk1'}

// PATCH /api/author/add-book/ - prideda viena knyga i autoriaus kurio id === authorId bookId masyva
authorRoutes.patch('/author/add-book', async (req, res) => {
  // updateOne({filterObj/query}, {$set: {name: 'James'}})
  try {
    const { authorId } = req.params;
    const { newName: bookID } = req.body;
    // prisijungti
    await dbClient.connect();
    // atlikti veiksma
    console.log('connected');
    // atnaujinti varda
    const collection = dbClient.db('libary').collection('authors');
    const updateResult = await collection.updateOne(
      { _id: ObjectId(authorId) },
      { $set: { name: bookID } }
    );
    res.status(200).json(updateResult);
  } catch (error) {
    console.error('error in updating author name', error);
    res.status(500).json('something is wrong');
  } finally {
    // uzdaryti prisijungima
    await dbClient.close();
  }
});
module.exports = authorRoutes;
