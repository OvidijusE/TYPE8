const express = require('express');
const { isLoggedIn } = require('../middleware');
const { getAllUsers } = require('../model/userModel');

const userRoutes = express.Router();

userRoutes.get('/', isLoggedIn, async (req, res) => {
  console.log(req.headers);
  res.send({ msg: 'Getting data' });
});

userRoutes.get('/users', async (req, res) => {
  try {
    const allUserArr = await getAllUsers();
    res.json(allUserArr);
  } catch (error) {
    console.log('error ===', error);
    res.sendStatus(500);
  }
});

module.exports = {
  userRoutes,
};
