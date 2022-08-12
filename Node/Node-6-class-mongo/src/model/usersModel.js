const { dbClient } = require('../config');

const dbName = 'node7';
const collName = 'users';

async function findMalesDb() {
  console.log('findMalesDb ran');
  try {
    const query = { gender: 'male' };
    await dbClient.connect();
    const resource = dbClient.db(dbName).collection(collName);
    const studArr = await resource.find(query).toArray();
    return studArr;
  } catch (error) {
    console.log('findMalesDb === error', error);
    return false;
  } finally {
    await dbClient.close();
  }
}

async function findFemalesDb() {
  console.log('findFemalesDb ran');
  try {
    const query = { gender: 'female' };
    await dbClient.connect();
    const resource = dbClient.db(dbName).collection(collName);
    const studArr = await resource.find(query).toArray();
    return studArr;
  } catch (error) {
    console.log('findFemalesDb === error', error);
    return false;
  } finally {
    await dbClient.close();
  }
}

async function findUsersByName(nameParam) {
  console.log('findUsersByName ran');
  try {
    const query = { name: nameParam };
    await dbClient.connect();
    const resource = dbClient.db(dbName).collection(collName);
    const studArr = await resource.find(query).toArray();
    return studArr;
  } catch (error) {
    console.log('findUsersByName === error', error);
    return false;
  } finally {
    await dbClient.close();
  }
}

async function findUsersByAge(ageParam) {
  try {
    const query = { age: { $gt: +ageParam } };
    await dbClient.connect();
    const resource = dbClient.db(dbName).collection(collName);
    const usersArr = await resource.find(query).toArray();
    return usersArr;
  } catch (error) {
    console.log('findUsersByAge ===', error);
    return false;
  } finally {
    await dbClient.close();
  }
}

module.exports = {
  findMalesDb,
  findFemalesDb,
  findUsersByName,
  findUsersByAge,
};
