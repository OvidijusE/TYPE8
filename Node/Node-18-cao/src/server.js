const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT } = require('./config');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json('ok'));

app.use('/api', bookRoutes);

app.all('*', (req, res) => {
  res.status(404).json({ err: 'page not found' });
});

app.listen(PORT, () => console.log(`Server running: ${PORT}`));
