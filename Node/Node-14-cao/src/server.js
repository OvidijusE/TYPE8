const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const mySql = require('mysql2/promise');
const { PORT } = require('./config');
const shirtsRoutes = require('./routes/shirtsRoutes');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json('OKEY'));

app.use('/api', shirtsRoutes);

app.all('*', (req, res) => {
  res.status(404).json({ err: 'route not found' });
});

app.listen(PORT, () => console.log(`Server working: ${PORT}`));
