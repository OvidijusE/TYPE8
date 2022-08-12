require('dotenv').config();
const express = require('express');
const { posts } = require('../db/db');

const postsRoutes = express.Router();

// // GET /api/posts/dbname - gazina DB_NAME is .env
postsRoutes.get('/dbname', (req, res) => {
  res.send(`<h1>Name :${process.env.DB_NAME}</h1>`);
  console.log(process.env.DB_NAME);
});

postsRoutes.get('/', (request, response) => {
  console.log('numbers ===', posts);
  response.json(posts);
});

// GET /posts/1 - grazina post objekta kurio id yra 1
postsRoutes.get('/1', (req, res) => {
  const foundPost = posts.find((pObj) => pObj.id === 1);
  res.json(foundPost);
});

// GET /posts/:postId - grazina post objekta kurio id yra 1 (dinaminis)
// :postId - dinaminis route parametras. Ji gauname is req.params. <pavadinimas>
postsRoutes.get('/:postId', (req, res) => {
  console.log('req.params ', req.params.postId);
  const postId = +req.params.postId;
  console.log('postId ===', postId);
  const foundPost = posts.find((pObj) => pObj.id === postId);
  console.log('foundPost ===', foundPost);
  if (foundPost === undefined) {
    res.status(404).json({ error: 'Post not found' });
    return;
  }
  res.json(foundPost);
});

module.exports = postsRoutes;
