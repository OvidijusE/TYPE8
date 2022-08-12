const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT } = require('./config');
const { userRoute } = require('./api/people');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/', userRoute);

app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
  });
});

app.listen(PORT, () => console.log(`Server running : ${PORT}`));
