const express = require('express');
const { numbers } = require('../db/db');

// sukuriam routerio objekta
const numbersRoutes = express.Router();

// Routes

// GET /numbers - grazina numbers masyva json formatu is db.js
numbersRoutes.get('/', (request, response) => {
  console.log('numbers ===', numbers);
  response.json(numbers);
});

// GET /numbers/positive - grazina numbers masyva json formatu is db.js su tik teigiamais skaiciais
numbersRoutes.get('/positives', (req, resp) => {
  // numbers gauti tik teigiamus ir graziti
  const positives = numbers.filter((n) => n > 0);
  resp.json(positives);
  //   resp.json(numbers.filter((sk) => sk > 0));
});

// GET /numbers/obj-values grazinam masyva kuris turi objektus {value : 1}, {value: 15}
numbersRoutes.get('/obj-values', (req, res) => {
  const numbObjs = numbers.map((sk) => ({ value: sk }));
  console.log('numbObjs ===', numbObjs);
  res.json(numbObjs);
});

// GET /numbers/max - grazina didziausia reiksme objekto pavidalu {max: 500}
numbersRoutes.get('/max', (req, res) => {
  const max = numbers.reduce((maxNum, sk) => Math.max(maxNum, sk));
  res.json({ maxIs: max });
});

// GET /numbers/gt/:num - grazina masyva kuriame yra sk didesni uz num
numbersRoutes.get('/gt/:num', (req, res) => {
  // pasiimti num
  const num = +req.params.num;
  res.json(numbers.filter((sk) => sk > num));
});

// default export
module.exports = numbersRoutes;
