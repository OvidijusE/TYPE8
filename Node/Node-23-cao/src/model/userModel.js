const mysql = require('mysql2/promise');
const { dbConfig } = require('../config.js');

async function addUserToDb(email, password) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
    const [result] = await conn.execute(sql, [email, password]);
    return result;
  } catch (error) {
    console.log('error in addUserToDb ===', error);
    return false;
  } finally {
    conn?.end();
  }
}

async function findUserByEmail(email) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const sql = 'SELECT * FROM users WHERE email = ?';
    const [result] = await conn.execute(sql, [email]);
    return result[0];
  } catch (error) {
    console.log('error in findUserByEmail ===', error);
    return false;
  } finally {
    conn?.end();
  }
}

async function getArrayFromDb(sql) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const [result] = await conn.execute(sql, []);
    return result;
  } catch (error) {
    console.log('error ===', error);
    throw new Error('error in getArrayFromDb');
  } finally {
    conn?.end();
  }
}

async function getAllUsers() {
  const sql = 'SELECT * FROM users';
  return getArrayFromDb(sql);
}

module.exports = {
  addUserToDb,
  findUserByEmail,
  getAllUsers,
};
