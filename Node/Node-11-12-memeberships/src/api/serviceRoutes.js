const express = require('express');
const { ObjectId } = require('mongodb');
const { dbClient } = require('../config');

const servicesRoutes = express.Router();

// ROUTES
// GET
servicesRoutes.get('/services', async (req, res) => {
  try {
    await dbClient.connect();

    const collection = dbClient.db('memberships11').collection('services');
    // aggreguoti su useriais
    const agg = [
      {
        $lookup: {
          from: 'users',
          localField: '_id',
          foreignField: 'service_id',
          as: 'userArr',
        },
      },
    ];
    const allArr = await collection.aggregate(agg).toArray();
    console.log('allArr ===', allArr);
    const servicesWithUserCount = allArr.map((sObj) => {
      const rez = {
        ...sObj,
        userCount: sObj.userArr.length,
      };
      delete rez.userArr;
      return rez;
    });
    res.json(servicesWithUserCount);
  } catch (error) {
    console.error('error in get users', error);
    res.status(500).json('something is wrong');
  } finally {
    await dbClient.close();
  }
});

// POST
servicesRoutes.post('/services', async (req, res) => {
  try {
    const newServiceObj = req.body;
    await dbClient.connect();
    const collection = dbClient.db('memberships11').collection('services');
    const insertServices = await collection.insertOne(newServiceObj);
    if (insertServices.insertedId) {
      // jeigu siunciam tik status tai sendStatus()
      res.sendStatus(201);
      return;
    }
    throw new Error('insertServices.insertedId false');
  } catch (error) {
    console.error('error in post services', error);
    res.status(500).json('something is wrong');
  } finally {
    await dbClient.close();
  }
});

// DELETE
servicesRoutes.delete('/services/:serId', async (req, res) => {
  try {
    const stringId = req.params.serId;
    const mongoObjId = new ObjectId(stringId);
    await dbClient.connect();

    // pasitikrinti ar service turi useriu.
    // jei turi netrinam ir apie tai pranesam

    const collection = dbClient.db('memberships11').collection('services');
    const deleteRezult = await collection.deleteOne({ _id: mongoObjId });
    // isitikinti kad istikro buvi istrinta
    if (deleteRezult.deletedCount === 1) {
      res.status(200).json({ success: true });
      return;
    }
    if (deleteRezult.deletedCount === 0) {
      res.status(400).json({ err: 'nothing was deleted' });
      return;
    }
    res.status(500).json('something is wrong');
  } catch (error) {
    console.error('error in delete user', error);
    res.status(500).json('something is wrong');
  } finally {
    await dbClient.close();
  }
});

module.exports = servicesRoutes;
