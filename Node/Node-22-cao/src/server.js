const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { PORT } = require('./config');
const router = require('./routes/auth.js');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api', router);

app.all('*', (req, res) => {
  res.status(404).json({ error: 'page not found' });
});

app.listen(PORT, () => console.log(`Server working: ${PORT}`));
