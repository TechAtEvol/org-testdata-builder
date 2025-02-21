const { MongoClient } = require('mongodb');
const {mongoDbConnectionString} = require('../config');

const dbName = 'orgkontroll_db';
const collectionName = 'organisations';
const client = new MongoClient(mongoDbConnectionString);

const getAllOrganisations = async () => {
  await client.connect()
  const db = client.db(dbName)
  const organisations = await db.collection(collectionName);
  const result = await organisations.find({}).toArray();
  await client.close()
  return result
}

const saveOrganisation = async (doc) => {
  await client.connect()
  const db = client.db(dbName)
  const organisations = await db.collection(collectionName);
  await organisations.insertOne(doc)
  return doc
}

module.exports = {
  getAllOrganisations,
  saveOrganisation
}
