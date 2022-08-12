const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { PORT, dbClient } = require('./config');

const app = express();
const dbName = 'node7';
const collName = 'users';

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    await dbClient.connect();
    const resource = dbClient.db(dbName).collection(collName);
    const userArr = await resource.find().toArray();
    res.json(userArr);
  } catch (error) {
    res.status(500).json(`not work`);
  } finally {
    await dbClient.close();
  }
});

app.post('/users', async (req, res) => {
  try {
    await dbClient.connect();
    const resource = await dbClient.db(dbName).collection(collName).insertOne({ name: 'Petras', surname: 'Slekys' });
    console.log('resource ===', resource);
    // const userArr = await resource.find().toArray();
    res.json(resource);
  } catch (error) {
    res.status(500).json(`not work`);
  } finally {
    await dbClient.close();
  }
});

app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
  });
});

app.listen(PORT, () => console.log(`Server running : ${PORT}`));
