const express = require('express');
const { getAllBooks, addBook } = require('../model/bookModel');
const controller = require('../controllers/bookController');
const { validateBook } = require('../views/utils/middleware');

const bookRoutes = express.Router();

bookRoutes.get('/books', controller.showBooksPage);

// GET /books/new - render new-books.ejs kuriame yra forma sukurti naujai knygai
bookRoutes.get('/books/new', controller.showNewBookForm);

// POST /books/new - creates new book from given url

// POST /books/new - res.json('trying to create a new book')
bookRoutes.post('/books/new', validateBook, controller.processBookForm);

module.exports = bookRoutes;
