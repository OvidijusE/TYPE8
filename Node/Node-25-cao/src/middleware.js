const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./config');

// first middleware helper
function showBody(req, res, next) {
  if (req.method === 'POST') {
    console.log('req.body====', req.body);
  }
  next();
}

async function validateUser(req, res, next) {
  const schema = Joi.object({
    email: Joi.string().trim().email().lowercase().required(),
    password: Joi.string().trim().min(5).max(10).required(),
  });
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    console.log('error in schema validateAsync ===', error);
    const formatedError = error.details.map((eObj) => ({
      message: eObj.message,
      field: eObj.path[0],
    }));
    res.status(400).json(formatedError);
  }
}

async function validateToken(req, res, next) {
  const tokenFromHeaders = req.headers.authorization?.split(' ')[1];
  if (!tokenFromHeaders) {
    res.status(400).json({
      success: false,
      error: 'no token',
    });
    return;
  }
  try {
    const tokenPayLoad = jwt.verify(tokenFromHeaders, jwtSecret);
    const { userId } = tokenPayLoad;
    req.userId = userId;
  } catch (error) {
    console.log('error in validateToken ===', error);
    res.status(400).json({
      success: false,
      error: 'invalid token',
    });
  }
}

module.exports = {
  showBody,
  validateUser,
  validateToken,
};
