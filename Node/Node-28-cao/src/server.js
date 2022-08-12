const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const { PORT } = require('./config');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');

const staticDir = path.join(__dirname, 'assets');
app.use(express.static(staticDir));

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
  res.render('index', { page: 'Home', menuId: 'home' });
});

app.all('*', (req, res) => {
  res.status(400).json({ error: 'page not found' });
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
