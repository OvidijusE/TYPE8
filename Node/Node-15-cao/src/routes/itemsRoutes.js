const express = require('express');
const mySql = require('mysql2/promise');
const { dbConfig } = require('../config');

const itemsRoutes = express.Router();

// itemsRoutes.get('/items', async (req, res) => {
//   let connection;
//   try {
//     connection = await mySql.createConnection(dbConfig);
//     const sql = 'SELECT * FROM `items`';
//     const [getItems] = await connection.query(sql);
//     res.json(getItems);
//   } catch (error) {
//     res.status(500).json('error in get items');
//   } finally {
//     await connection?.end();
//   }
// });

// 5.GET route paims ir paduos visus įrašus iš duomenų bazės. Pakoreguokime, kad būtų galime nustatyti limit'ą su search query (t.y. ?limt=10).
itemsRoutes.get('/items', async (req, res) => {
  let connection;
  try {
    const { limit } = req.query;
    console.log('limit ===', limit);
    connection = await mySql.createConnection(dbConfig);
    const sql = 'SELECT * FROM `items` LIMIT ?';
    const [getItemsWithLimit] = await connection.execute(sql, [limit]);
    res.json(getItemsWithLimit);
  } catch (error) {
    res.status(500).json('error in get items with limit');
  } finally {
    await connection?.end();
  }
});

itemsRoutes.post('/items', async (req, res) => {
  let connection;
  try {
    const { title } = req.body;
    connection = await mySql.createConnection(dbConfig);
    const sql = `INSERT INTO items (title) VALUES (?)`;
    const [insertItem] = await connection.execute(sql, [title]);
    if (insertItem.affectedRows !== 1) {
      res.status(400).json({ sucess: false, error: `${title} was not added` });
      return;
    }
    if (insertItem.affectedRows === 1) {
      res.status(201).json({ sucess: true, message: `${title} successfully added` });
      return;
    }
    throw new Error('affected row not 1');
  } catch (error) {
    console.log('error in post route ===', error.message);
    res.status(500).json('error in posting item');
  } finally {
    await connection?.end();
  }
});

itemsRoutes.delete('/items/:itemId', async (req, res) => {
  let connection;
  try {
    const { itemId } = req.params;
    connection = await mySql.createConnection(dbConfig);
    const sql = `DELETE FROM items WHERE id = ?`;
    const [deleteItem] = await connection.execute(sql, [itemId]);
    if (deleteItem.affectedRows !== 1) {
      res.status(400).json({ sucess: false, error: `item with id: ${itemId}, was not deleted` });
      return;
    }
    if (deleteItem.affectedRows === 1) {
      res.json('delete okey');
      return;
    }
    throw new Error('bad delete');
  } catch (error) {
    console.log('error in delte route ===', error.message);
    res.status(500).json('error in deleting item');
  } finally {
    await connection?.end();
  }
});

module.exports = itemsRoutes;
