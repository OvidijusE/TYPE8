const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config');

// helper
function showBody(req, res, next) {
  if (req.method === 'POST') {
    console.log('req.body === ', req.body);
  }
  next();
}

async function validateUser(req, res, next) {
  const schema = Joi.object({
    email: Joi.string().email().trim().lowercase().required(),
    password: Joi.string().trim().min(5).max(10).required(),
  });
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    console.log('error in validateUser ===', error);
    res.status(400).json(error.details);
  }
}

async function isLoggedIn(req, res, next) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    const user = jwt.verify(token, JWT_SECRET);
    console.log('user ===', user);
    next();
  } catch (error) {
    console.log('error in isLoggedIn ===', error);
    res.status(404).json({ err: 'Invalid token' });
  }
}

module.exports = {
  showBody,
  validateUser,
  isLoggedIn,
};
