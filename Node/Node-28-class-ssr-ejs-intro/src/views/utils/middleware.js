const Joi = require('joi');

async function validateBook(req, res, next) {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    author: Joi.string().min(3).required(),
    year: Joi.number().min(1900).max(2030).required(),
    category: Joi.number().min(1).max(5).required(),
  });
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    console.log('error in validateAsync ===', error);
    const formatedError = error.details.map((eObj) => ({
      message: eObj.message,
      field: eObj.path[0],
    }));
    res.status(400).json(formatedError);
  }
}

module.exports = {
  validateBook,
};
