const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');
const { addUserToDb, findUserByEmail } = require('../model/userModel');
const { validateUser } = require('../middleware');

const auth = express.Router();

auth.post('/register', validateUser, async (req, res) => {
  const { email, password } = req.body;
  const plainPass = password;
  const hashedPass = bcrypt.hashSync(plainPass, 10);

  const newUser = {
    email,
    password: hashedPass,
  };
  const insertUser = await addUserToDb(newUser.email, newUser.password);
  console.log('insertUser ===', insertUser);
  if (insertUser === false) {
    res.status(500).json('error in register user');
    return;
  }
  res.status(201).json('user created');
});

auth.post('/login', validateUser, async (req, res) => {
  const receivedEmail = req.body.email;
  const receivedPass = req.body.password;

  // authenticate user
  const foundUser = await findUserByEmail(receivedEmail);
  console.log('foundUser ===', foundUser);

  if (!foundUser) {
    res.status(400).json('email or password not found');
    return;
  }
  if (!bcrypt.compareSync(receivedPass, foundUser.password)) {
    res.status(400).json('email or password not found');
  }

  //   generate jwt token
  const payload = { userId: foundUser.id };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
  res.json({ success: true, token });
});

module.exports = {
  auth,
};
