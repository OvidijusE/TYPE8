const { createTableDB, insertCatDB } = require('../models/categoriesModel');

// controller
async function createTable(req, res) {
  console.log('createTable controller ran');
  try {
    const createResult = await createTableDB();
    res.json(createResult);
  } catch (error) {
    if (error.errno === 1054) {
      console.log('column error');
    }
    // console.log('error ===', error);
    console.log('error ===', error.sqlMessage);
    res.sendStatus(500);
  }
}

async function createCategory(req, res) {
  console.log('createCategory controller ran');
  try {
    const { title } = req.body;
    const createResult = await insertCatDB(title);
    res.json(createResult);
  } catch (error) {
    if (error.errno === 1054) {
      console.log('column error');
    }

    console.log('error ===', error.sqlMessage);
    res.sendStatus(500);
  }
}

module.exports = {
  createTable,
  createCategory,
};
