const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { PORT } = require('./config');

const { showBody } = require('./middleware');
const userRoutes = require('./routes/userRoutes');
const booksRoute = require('./routes/booksRoutes');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(showBody);

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Routes
app.use('/', userRoutes);
app.use('/', booksRoute);

app.all('*', (req, res) => {
  res.status(404).json({ error: 'page not found' });
});

app.listen(PORT, () => console.log(`Server working: ${PORT}`));
