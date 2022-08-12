const express = require('express');
const { validateUser } = require('../middleware');
const { executeDb, findUserByEmail, userCount } = require('../model/usersModel');
const { hashPassword, passWordsMatch, generateJwtToken } = require('../utils/helpers');

const usersRoutes = express.Router();

usersRoutes.post('/register', validateUser, async (req, res) => {
  const newUser = req.body;
  newUser.password = hashPassword(newUser.password);
  try {
    const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
    const saveResult = await executeDb(sql, [newUser.email, newUser.password]);
    if (saveResult.affectedRows === 1) {
      res.sendStatus(201);
      return;
    }
    res.status(400).json('no user created');
  } catch (error) {
    console.log('error in register user ===', error);
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(400).json('user already exists');
      return;
    }
    res.sendStatus(500);
  }
});

usersRoutes.post('/login', validateUser, async (req, res) => {
  const receivedEmail = req.body.email;
  const receivedPassword = req.body.password;
  // check email
  const foundUserArr = await findUserByEmail(receivedEmail);
  const foundUser = foundUserArr[0];
  console.log('foundUser ===', foundUser);
  if (!foundUser) {
    res.status(400).json('email or password not found');
    return;
  }
  if (!passWordsMatch(receivedPassword, foundUser.password)) {
    res.status(400).json('email or password not found');
    return;
  }
  const payload = { userId: foundUser.id };
  const token = generateJwtToken(payload);
  res.json({ success: true, token });
});

usersRoutes.get('/users', async (req, res) => {
  try {
    const usersArr = await userCount();
    res.json(usersArr);
  } catch (error) {
    console.log('error in get all users ===', error);
    res.sendStatus(500);
  }
});

module.exports = usersRoutes;
