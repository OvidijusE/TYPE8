const express = require('express');
const { ObjectId } = require('mongodb');
const { dbClient } = require('../config');

const commentsRoutes = express.Router();

// 3.GET /comments/ atsiųs visus komentarus ir jų vardus (t.y. date, comment ir name of user).
commentsRoutes.get('/comments', async (req, res) => {
  try {
    const aggPipeline = [
      {
        $lookup: {
          from: 'users',
          localField: 'user_id',
          foreignField: '_id',
          as: 'userArr',
        },
      },
    ];
    // prisijungti
    await dbClient.connect();
    // atlikti veiksma
    console.log('connected');
    const collection = dbClient.db('cao10').collection('comments');
    const commentsArr = await collection.aggregate(aggPipeline).toArray();
    res.status(200).json(commentsArr);
  } catch (error) {
    console.error('error in get users', error);
    res.status(500).json('something is wrong');
  } finally {
    // uzdaryti connection
    await dbClient.close();
  }
});

// 4.DELETE /comments/:id ištrins vieną komentarą pagal jo ID.
commentsRoutes.delete('/comments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await dbClient.connect();
    // atlikti veiksma
    console.log('connected');
    const collection = dbClient.db('cao10').collection('comments');
    const deletedComment = await collection.deleteOne({ _id: ObjectId(id) });
    res.status(200).json(deletedComment);
  } catch (error) {
    console.error('error in get users', error);
    res.status(500).json('something is wrong');
  } finally {
    // uzdaryti connection
    await dbClient.close();
  }
});

module.exports = commentsRoutes;
