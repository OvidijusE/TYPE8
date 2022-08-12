const { dbClient } = require('./config');

async function getArrayDb(collectionName) {
  try {
    await dbClient.connect();
    const collection = dbClient.db('libary').collection(collectionName);
    const arrFromDb = await collection.find().toArray();
    return arrFromDb;
  } catch (error) {
    console.error('error in getArrayDb', error);
    // return false;
    throw new Error('error in getArrayDb');
  } finally {
    await dbClient.close();
  }
}
function getSingleDb() {}

module.exports = {
  getArrayDb,
  getSingleDb,
};
