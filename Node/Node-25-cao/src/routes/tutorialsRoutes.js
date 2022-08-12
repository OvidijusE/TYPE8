const express = require('express');
const { validateToken } = require('../middleware');
const { getTutorialsDb, getTutorialsById, getAllTutorials } = require('../model/tutorialsModel');

const tutorialsRoutes = express.Router();

tutorialsRoutes.get('/user-tutorials/:id', validateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const tutorialsArr = await getTutorialsById(id);
    res.json(tutorialsArr);
  } catch (error) {
    console.log('error in get user tutorials ===', error);
    res.sendStatus(500);
  }
});

tutorialsRoutes.get('/tutorials', async (req, res) => {
  try {
    const tutorialsArr = await getAllTutorials();
    res.json(tutorialsArr);
  } catch (error) {
    console.log('error in get all tutorials ===', error);
    res.sendStatus(500);
  }
});

module.exports = tutorialsRoutes;
