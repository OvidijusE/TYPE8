const express = require('express');
const path = require('path');
const { PORT } = require('./config');
const articlesRoutes = require('./routes/articleRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(express.urlencoded({ extended: false }));

const staticDir = path.join(__dirname, 'assets');
app.use(express.static(staticDir));

app.use('/', articlesRoutes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
