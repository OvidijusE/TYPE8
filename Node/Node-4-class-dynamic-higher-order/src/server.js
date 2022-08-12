require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { port } = require('./config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// jeigu su tagais tai send, kitaip json
app.get('/', (request, response) => {
  response.send(`<h1>Hello express ${process.env.USER} </h1>`);
});

// GET /api/posts/dbname - gazina DB_NAME is .env
// app.get('/dbname', (req, res) => {
//   res.send(`Name :${process.env.DB_NAME}`);
// });

// import routes
const numbersRoutes = require('./api/numbersRoutes');
const postsRoutes = require('./api/postsRoutes');
// use route
app.use('/api/numbers', numbersRoutes);
app.use('/api/posts', postsRoutes);

app.all('*', (req, res) => {
  res.status(404).json('Path not found');
});

app.listen(port, () => console.log('Server working:', port));

//
