const express = require('express');
const { getAllArticles } = require('../model/articlesModel');

const articlesRoutes = express.Router();

articlesRoutes.get('/', async (req, res) => {
  const locals = {
    title: 'Homepage',
    currentPage: 'home',
  };
  res.render('index', locals);
});

articlesRoutes.get('/news', async (req, res) => {
  let allArticlesArr;
  let feedBack;
  try {
    allArticlesArr = await getAllArticles();
  } catch (error) {
    console.log('error ===', error);
    feedBack = 'Something went wrong';
  }
  const locals = {
    title: 'news',
    currentPage: 'news',
    allArticlesArr,
    feedBack,
  };
  res.render('news', locals);
});

module.exports = articlesRoutes;
