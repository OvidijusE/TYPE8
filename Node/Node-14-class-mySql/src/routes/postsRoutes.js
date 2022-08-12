const express = require('express');
const mySql = require('mysql2/promise');
const { dbConfig } = require('../config');

const postsRoutes = express.Router();

// postsRoutes.get('/posts', postController.index);

postsRoutes.get('/posts', async (req, res) => {
  let connection;
  try {
    // 1 prisijungti
    const connection = await mySql.createConnection(dbConfig);
    console.log('connected');
    // 2 atlikti veiksma
    const sql = 'SELECT * FROM `posts`';
    const [rows, fields] = await connection.query(sql);
    res.json(rows);
  } catch (error) {
    // err gaudom klaidas
    console.log('home route error ===', error.message);
    res.status(500).json('something went wrong');
  } finally {
    // 3 atsijungti
    // if (connection) connection.end();
    connection?.end(); //modern version
  }
});

// GET /api/first-posts - parsiusti pirmus 2 posts (LIMIT)
postsRoutes.get('/posts/first-posts', async (req, res) => {
  let connection;
  try {
    const connection = await mySql.createConnection(dbConfig);
    const sql = 'SELECT * FROM `posts` LIMIT 2';
    const [rows] = await connection.query(sql);
    res.json(rows);
  } catch (error) {
    res.status(500).json('error in first posts');
  } finally {
    await connection?.end();
  }
});

// GET /api/posts-by-rating/  - parsiusti visus posts isrikiuotuos nuo diziausio rating vertinimo.
// postsRoutes.get('/posts/posts-by-rating', async (req, res) => {
//   let connection;
//   try {
//     const connection = await mySql.createConnection(dbConfig);
//     const sql = 'SELECT * FROM `posts` ORDER BY rating DESC';
//     const [rows] = await connection.query(sql);
//     res.json(rows);
//   } catch (error) {
//     res.status(500).json('error in order posts by rating');
//   } finally {
//     await connection?.end();
//   }
// });

postsRoutes.get('/posts/posts-by-rating', async (req, res) => {
  let connection;
  try {
    // gauti query params
    const { order } = req.query;
    // SELECT * FROM `posts` ORDER BY rating DESC
    // vietoj DESC gali buti tik 2 reiksmes DESC | ASC
    connection = await mySql.createConnection(dbConfig);
    // salyga ? true : false
    const ascOrDesc = order === 'ASC' ? 'ASC' : 'DESC';
    const sql = `SELECT * FROM posts ORDER BY rating ${ascOrDesc}`;
    console.log('sql ===', sql);
    const [rows] = await connection.query(sql);
    res.json(rows);
  } catch (error) {
    res.status(500).json('error in order posts by rating');
  } finally {
    await connection?.end();
  }
});

// GET /api/posts/name/:name - parisiusti postus kuriuos parase :name
postsRoutes.get('/posts/name/:name', async (req, res) => {
  let connection;
  try {
    const { name } = req.params;
    const connection = await mySql.createConnection(dbConfig);
    // esame neapsaugoti nuo sql injecion
    // const sql = `SELECT * FROM posts WHERE author = '${name}'`;
    // const [rows] = await connection.query(sql);
    // reikia neutralizuoti vartotojo ivesties duomeni
    const sql = 'SELECT * FROM posts WHERE author = ?';
    const [rows] = await connection.execute(sql, [name]);
    res.json(rows);
  } catch (error) {
    res.status(500).json('error in get posts by name');
  } finally {
    await connection?.end();
  }
});

// POST apie/posts sukurti nauja post route
postsRoutes.post('/posts', async (req, res) => {
  let connection;
  try {
    const newPostObj = req.body;
    const { title, author, body, rating } = newPostObj;
    connection = await mySql.createConnection(dbConfig);
    const sql = `INSERT INTO posts (title, author, body, rating) VALUES (?, ?, ?, ?)`;
    const [insertResult] = await connection.execute(sql, [title, author, body, rating]);
    if (insertResult.affectedRows === 1) {
      res.status(201).json(insertResult);
      return;
    }
    throw new Error('affected row not 1');
  } catch (error) {
    res.status(500).json('error in creating posts by name');
  } finally {
    await connection?.end();
  }
});

// DELETE /posts/:postID
postsRoutes.delete('/posts/:postId', async (req, res) => {
  let connection;
  try {
    const { postId } = req.params;
    connection = await mySql.createConnection(dbConfig);
    const sql = 'DELETE FROM posts WHERE id = ?';
    const [deleteResult] = await connection.execute(sql, [postId]);
    if (deleteResult.affectedRows !== 1) {
      res.status(400).json({ success: false, error: `user with id: ${postId}, was not found` });
      return;
    }
    if (deleteResult.affectedRows === 1) {
      res.json('delete okey');
      return;
    }
    throw new Error('something wrong in delete deleteResult.affectedRows');
  } catch (error) {
    console.log('delete route error ===', error.message);
    res.status(500).json('error in delete posts');
  } finally {
    connection?.end();
  }
});

module.exports = postsRoutes;
