const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT } = require('./config');
const postsRoutes = require('./routes/postsRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');

const app = express();

// MiddleWare
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// home route
app.get('/', (req, res) => res.json('Ok'));

// Routes
app.use('/api', postsRoutes);
app.use('/api', categoriesRoutes);

// visi requestai, visi adresai
app.all('*', (req, res) => {
  res.status(404).json({ err: 'page not found' });
});

app.listen(PORT, () => console.log(`Server working: ${PORT}`));
