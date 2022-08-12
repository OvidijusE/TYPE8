const mySql = require('mysql2/promise');
const { dbConfig } = require('../config');

// model function
async function createTableDB() {
  console.log('createTable model ran');
  let conn;
  try {
    conn = await mySql.createConnection(dbConfig);
    const sql = `
    CREATE TABLE type8_first_db.categories( id INT UNSIGNED NOT NULL AUTO_INCREMENT ,
       title VARCHAR(255) NOT NULL , 
       created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (id)) ENGINE = InnoDB
    `;
    const [result] = await conn.query(sql);
    return result;
  } catch (error) {
    console.log('error in createTableDB ===', error);
    // return false;
    // throw new Error('error createTableDB');
    throw error;
  } finally {
    conn?.end();
  }
}

async function insertCatDB(title) {
  console.log('insertCatDB model ran');
  let conn;
  try {
    conn = await mySql.createConnection(dbConfig);
    const sql = `
    INSERT INTO categories (title)
    VALUES (?)
    `;
    const [result] = await conn.execute(sql, [title]);
    return result;
  } catch (error) {
    console.log('error in createTableDB ===', error);
    throw error;
  } finally {
    conn?.end();
  }
}

module.exports = {
  createTableDB,
  insertCatDB,
};
