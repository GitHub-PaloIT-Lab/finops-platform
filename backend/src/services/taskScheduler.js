// FILE: services/taskScheduler.js
const cron = require('node-cron');
const { getUsageAndBillingData } = require('./awsBillingService');
const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const databaseName = 'finops';
const collectionName = 'awsBillingData';

const storeBillingData = async (data) => {
  try {
    await client.connect();
    const database = client.db(databaseName);
    const collection = database.collection(collectionName);
    await collection.insertOne(data);
    console.log('Billing data stored successfully');
  } catch (error) {
    console.error('Error storing billing data:', error);
  } finally {
    await client.close();
  }
};

// Schedule task to run once every day at midnight
cron.schedule('0 0 * * *', async () => {
  console.log('Running daily billing data fetch task');
  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 1);
    const endDate = new Date();

    const data = await getUsageAndBillingData(startDate.toISOString().split('T')[0], endDate.toISOString().split('T')[0]);
    await storeBillingData(data);
  } catch (error) {
    console.error('Error in scheduled task:', error);
  }
});