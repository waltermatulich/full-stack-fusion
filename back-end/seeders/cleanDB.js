const db = require('../config/connection');

module.exports = async (modelName, collectionName) => {
  try {
    const collections = await db.db.listCollections().toArray();
    const collectionExists = collections.some(collection => collection.name === collectionName);

    if (collectionExists) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}