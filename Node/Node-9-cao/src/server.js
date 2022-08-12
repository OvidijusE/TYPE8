const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { PORT, dbClient } = require('./config');

const { userRoutes } = require('./api/usersRoutes');
const categoriesRoutes = require('./api/categoriesRoutes');
const productsRoutes = require('./api/productsRoutes');

const app = express();

// Global MiddleWare
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json('Ok'));

app.use('/api', userRoutes);

app.use('/api', categoriesRoutes);

app.use('/api', productsRoutes);

app.listen(PORT, () => console.log(`Server working : ${PORT}`));
