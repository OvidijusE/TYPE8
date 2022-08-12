require('dotenv').config();
const { MongoClient } = require('mongodb');

const PORT = +process.env.PORT || 5000;
const dbClient = new MongoClient(process.env.MONGO_URL);

module.exports = {
  PORT,
  dbClient,
};
