const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const usersRoute = require('./api/users');
const { PORT } = require('./config');

const app = express();

// MiddleWare
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/', usersRoute);

// 404
app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
  });
});

app.listen(PORT, () => console.log(`Server working: ${PORT}`));
