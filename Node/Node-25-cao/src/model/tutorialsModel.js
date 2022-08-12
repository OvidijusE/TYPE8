const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');

async function executeDb(sql, dataToDbArr) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const [result] = await conn.execute(sql, dataToDbArr);
    return result;
  } catch (error) {
    console.log('error in executeDb ===', error);
    throw new Error('error in executeDb');
  } finally {
    conn?.end();
  }
}

function getTutorialsDb() {
  const sql = 'SELECT * FROM tutorials';
  return executeDb(sql);
}

function getTutorialsById(id) {
  const sql = 'SELECT * FROM tutorials WHERE id = ?';
  return executeDb(sql, [id]);
}

function getAllTutorials(private) {
  const sql = 'SELECT * FROM tutorials WHERE private = ?';
  return executeDb(sql, [private]);
}

module.exports = {
  getTutorialsDb,
  getTutorialsById,
  getAllTutorials,
};
