const express = require('express');
const mySql = require('mysql2/promise');
const { dbConfig } = require('../config');

const bookRoutes = express.Router();

bookRoutes.get('/books', async (req, res) => {
  let conn;
  try {
    conn = await mySql.createConnection(dbConfig);
    const sql = 'SELECT * FROM `books`';
    const [rows] = await conn.query(sql);
    res.json(rows);
  } catch (error) {
    console.log('error in get book ===', error);
    res.status(500).json('error in get book');
  } finally {
    await conn?.end();
  }
});

bookRoutes.get('/books/books-and-authors', async (req, res) => {
  let conn;
  try {
    conn = await mySql.createConnection(dbConfig);
    const sql = 'SELECT * FROM `books` LEFT JOIN authors ON books.author_id = authors.id';
    const [rows] = await conn.query(sql);
    res.json(rows);
  } catch (error) {
    console.log('error books and authors ===', error);
    res.status(500).json('error books and authors');
  } finally {
    await conn?.end();
  }
});

bookRoutes.get('/books/authors-all-books', async (req, res) => {
  let conn;
  try {
    conn = await mySql.createConnection(dbConfig);
    const sql =
      'SELECT authors.id, authors.name, authors.surname, COUNT(books.author_id) FROM authors LEFT JOIN books ON authors.id = books.author_id GROUP BY authors.id, authors.name';
    const [rows] = await conn.query(sql);
    res.json(rows);
  } catch (error) {
    console.log('authors-all-books ===', error);
    res.status(500).json('authors-all-books');
  } finally {
    await conn?.end();
  }
});

module.exports = bookRoutes;
