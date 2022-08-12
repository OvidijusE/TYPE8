const express = require('express');
const mySql = require('mysql2/promise');
const { dbConfig } = require('../config');

const carRoutes = express.Router();

carRoutes.get('/cars', async (req, res) => {
  let conn;
  try {
    conn = await mySql.createConnection(dbConfig);
    const sql = 'SELECT * FROM `cars`';
    const [rows] = await conn.query(sql);
    res.json(rows);
  } catch (error) {
    console.log('error in get car ===', error);
    res.status(500).json('error in get car');
  } finally {
    await conn?.end();
  }
});

carRoutes.get('/cars/:carId', async (req, res) => {
  let conn;
  try {
    const { carId } = req.params;
    conn = await mySql.createConnection(dbConfig);
    const sql = 'SELECT * FROM `cars` WHERE id = ?';
    const [getCar] = await conn.execute(sql, [carId]);
    res.json(getCar);
  } catch (error) {
    console.log('error in getting car by id ===', error);
    res.status(500).json('error in getting car by id');
  } finally {
    await conn?.end();
  }
});

carRoutes.post('/cars', async (req, res) => {
  if (!req.body.title || !req.body.price || !req.body.numberplates) {
    return res.status(400).send({ err: 'Incorrect data' });
  }
  let conn;
  try {
    const newCarObj = req.body;
    const { title, image, price, numberplates } = newCarObj;
    conn = await mySql.createConnection(dbConfig);
    const sql = 'INSERT INTO `cars` (title, image, price, numberplates) VALUES (?, ?, ?, ?)';
    const [insertCar] = await conn.execute(sql, [title, image, price, numberplates]);
    if (insertCar.affectedRows !== 1) {
      res.status(400).json({ success: false, error: `could not get post car` });
      return;
    }
    if (insertCar.affectedRows === 1) {
      res.json({ success: true, error: `posting car successfull` });
      return;
    }
  } catch (error) {
    console.log('error in post car ===', error);
    res.status(500).json('error in posting car');
  } finally {
    await conn?.end();
  }
});

carRoutes.delete('/cars/:carId', async (req, res) => {
  let conn;
  try {
    const { carId } = req.params;
    conn = await mySql.createConnection(dbConfig);
    const sql = 'DELETE FROM `cars` WHERE id = ?';
    const [deleteResult] = await conn.execute(sql, [carId]);
    if (deleteResult.affectedRows !== 1) {
      res.status(400).json({ success: false, error: `could not delete car ${carId}` });
      return;
    }
    if (deleteResult.affectedRows === 1) {
      res.json({ success: true, error: `deleting car ${carId} successfull` });
      return;
    }
  } catch (error) {
    console.log('error in deleting car by id ===', error);
    res.status(500).json('error in deleting car by id');
  } finally {
    await conn?.end();
  }
});

module.exports = carRoutes;
