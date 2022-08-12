const express = require('express');

const controller = require('../controller/categoriesController');

const categoriesRoutes = express.Router();

// routes
categoriesRoutes.post('/categories/create', controller.createTable);
categoriesRoutes.post('/categories', controller.createCategory);

// POST /categories/ - atsiusti title ir sukurti nauja kategorija
module.exports = categoriesRoutes;
