const bcrypt = require('bcryptjs');
const express = require('express');
const Joi = require('joi');
const mysql = require('mysql2/promise');
const { dbConfig } = require('../config.js');

const router = express.Router();

const userSchema = Joi.object({
  email: Joi.string().email().trim().lowercase().required(),
  password: Joi.string().required(),
});

router.post('/register', async (req, res) => {
  let userData = req.body;
  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    console.log('error ===', error);
    return res.status(400).send({ err: 'Incorrect data sent' });
  }

  try {
    const hashedPassword = bcrypt.hashSync(userData.password);
    const conn = await mysql.createConnection(dbConfig);
    const [data] = await conn.execute(
      `INSERT INTO users (email, password) VALUES (${mysql.escape(
        userData.email
      )}, '${hashedPassword}')`
    );
    await conn.end();
    return res.send(data);
  } catch (error) {
    console.log('error ===', error);
    return res.status(500).send({ err: 'Unexpected error please try again' });
  }
});

router.post('/login', async (req, res) => {
  let userData = req.body;
  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    console.log('error ===', error);
    return res.status(400).send({ err: 'Incorrect email or password' });
  }

  try {
    const conn = await mysql.createConnection(dbConfig);
    const [data] = await conn.execute(
      `SELECT * FROM users WHERE email = ${mysql.escape(userData.email)}`
    );
    await conn.end();

    if (data.length === 0) {
      return res.status(400).send({ err: 'Incorrect email or password' });
    }
    const isAuthed = bcrypt.compareSync(userData.password, data[0].password);
    if (isAuthed) {
      return res.send('OK');
    }
    return res.status(400).send({ err: 'Incorrect email or passowrd' });
  } catch (error) {
    console.log('error ===', error);
    return res.status(500).send({ err: 'Unexpected error please try again' });
  }
});

module.exports = router;
