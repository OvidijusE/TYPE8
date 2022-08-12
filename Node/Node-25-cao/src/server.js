const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { PORT } = require('./config');
const usersRoutes = require('./routes/usersRoutes');
const tutorialsRoutes = require('./routes/tutorialsRoutes');
const { showBody } = require('./middleware');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(showBody);

app.get('/', (req, res) => {
  res.json('hello');
});

// Routes
app.use('/', usersRoutes);
app.use('/', tutorialsRoutes);

app.all('*', (req, res) => {
  res.status(400).json({ error: 'page not found' });
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
