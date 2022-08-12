const express = require('express');
const mySql = require('mysql2/promise');
const { dbConfig } = require('../config');

const shirtsRoutes = express.Router();

// 2.2 GET "/shirts" - išmeta 10 pigiausių marškinių (naudojam MySQL LIMIT ir ORDER BY).
shirtsRoutes.get('/shirts', async (req, res) => {
  let connection;
  try {
    const connection = await mySql.createConnection(dbConfig);
    const sql = 'SELECT * FROM `shirts` ORDER BY price ASC LIMIT 10';
    const [rows] = await connection.query(sql);
    res.json(rows);
  } catch (error) {
    res.status(500).json('error in get shirts');
  } finally {
    await connection?.end();
  }
});

// 2.3. POST "/shirts" - įrašo vienus marškinius.
shirtsRoutes.post('/shirts', async (req, res) => {
  let connection;
  try {
    const { brand, model, size, price } = req.body;
    const connection = await mySql.createConnection(dbConfig);
    const sql = 'INSERT INTO `shirts` (brand, model, size, price) VALUES (?, ?, ?, ?)';
    const [rows] = await connection.execute(sql, [brand, model, size, price]);
    res.json(rows);
  } catch (error) {
    res.status(500).json('error in post shirts');
  } finally {
    await connection?.end();
  }
});

// 3.Pakoreguojame GET "/shirts", kad leistų pagal dydį filtruoti ("/shirts/:size") ir grąžintų 10 pigiausių to dydžio'o. Tačiau jei dydis neparašytas - grąžintų, kaip ir anksčiau, visų dydžių 10 pigiausių.
// nebaigtas
// if else
shirtsRoutes.get('/shirts/:size', async (req, res) => {
  let connection;
  try {
    const { size } = req.params;
    const connection = await mySql.createConnection(dbConfig);
    const sql = 'SELECT * FROM `shirts` WHERE size = ? ORDER BY price ASC';
    const [rows] = await connection.execute(sql, [size]);
    res.json(rows);
  } catch (error) {
    res.status(500).json('error in get shirts by size');
  } finally {
    await connection?.end();
  }
});

module.exports = shirtsRoutes;
