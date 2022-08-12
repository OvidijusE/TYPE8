require('dotenv').config();

const PORT = +process.env.PORT || 5000;
const { JWT_SECRET } = process.env;

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

module.exports = {
  PORT,
  dbConfig,
  JWT_SECRET,
};
