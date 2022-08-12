const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');

async function getArrayFromDb(sql) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const [result] = await conn.execute(sql, []);
    return result;
  } catch (error) {
    console.log('error in getArrayFromDb ===', error);
    throw new Error('error getArrayFromDb');
  } finally {
    conn?.end();
  }
}

async function executeDb(sql, dataToDbArr) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const [result] = await conn.execute(sql, dataToDbArr);
    return result;
  } catch (error) {
    console.log('error in executeDb ===', error);
    throw error;
  } finally {
    conn?.end();
  }
}

function saveUserDb(email, password) {
  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
  return executeDb(sql, [email, password]);
}

function findUserByEmail(email) {
  const sql = 'SELECT * FROM users WHERE email = ?';
  return executeDb(sql, [email]);
}

function userCount() {
  const sql = 'SELECT COUNT(id) AS Users FROM users';
  return executeDb(sql);
}

module.exports = {
  executeDb,
  findUserByEmail,
  userCount,
};
