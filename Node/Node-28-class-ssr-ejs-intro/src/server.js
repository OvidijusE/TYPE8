const express = require('express');
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');
const { pageRoutes } = require('./routes/pageRoutes');

const app = express();

const PORT = 3000;

// Set default view engine default views directory /views
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Middleware
// atkoduoti req.body
app.use(express.urlencoded({ extended: false }));

// static directory
const staticDir = path.join(__dirname, 'assets');
app.use(express.static(staticDir));

// Routes
app.use('/', pageRoutes);
app.use('/', bookRoutes);

// GET /users - grazins users.ejs psl atvaizduos userius korteliu pavidalu
// sukurti users.ejs
// esportuoti importuoti users masyva
// paduoti user masyva i users.ejs psl
// user.ejs psl generuoti korteles is masyvo duomenu

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
