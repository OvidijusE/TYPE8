const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, dbClient } = require('./config');

const { usersRoutes } = require('./api/usersRoutes');
const servicesRoutes = require('./api/serviceRoutes');

const app = express();

// Global MiddleWare
app.use(morgan('dev'));
app.use(cors());
// igalinam express app atkoduoti json gautus duomenis
app.use(express.json());

app.get('/', (req, res) => res.json('Ok'));

app.use('/api', usersRoutes);

app.use('/api', servicesRoutes);

// 404 route
// app.use((req, res) => {
//   res.status(404).json({ err: 'route not found' });
// });

// tikslingesnis
app.all('*', (req, res) => {
  res.status(404).json({ err: 'route not found' });
});

app.listen(PORT, () => console.log(`Server working : ${PORT}`));
