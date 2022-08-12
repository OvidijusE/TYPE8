/**
 * from: The target collection. Su kokia lenetele jungiam
 * localField: The local join field.  Vietinis laukas, kuris yra vienodas su kitos lenteles lauku.
 * foreignField: The target join field. Kitos lenteles laukas lygus local field.
 * as: The name for the results. Kaip pavadinsime rezultatus
 * pipeline: The pipeline to run on the joined collection.
 * let: Optional variables to use in the pipeline field stages.
 */
 {
    from: 'authors',
    localField: '_id',
    foreignField: 'string',
    as: 'author'
  }


  const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */



MongoClient.connect(
  'mongodb+srv://ovidijus:master123@type8.as3lj.mongodb.net/test',
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(connectErr, client) {
    assert.equal(null, connectErr);
    const coll = client.db('libary').collection('books');
    coll.aggregate(agg, (cmdErr, result) => {
      assert.equal(null, cmdErr);
    });
    client.close();
  });