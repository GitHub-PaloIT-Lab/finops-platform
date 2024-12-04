# Daily Billing Data Fetch Task

## Overview
This feature schedules a task to fetch AWS usage and billing data once every day and stores the data in MongoDB.

## Implementation

### Task Scheduler

The `taskScheduler.js` file contains the implementation for scheduling the daily task using `node-cron`.

#### Usage

1. **Install Dependencies**:
    ```bash
    npm install mongodb node-cron
    ```

2. **Task Scheduler Implementation**:
    ```javascript
    const cron = require('node-cron');
    const { getUsageAndBillingData } = require('./awsBillingService');
    const { MongoClient } = require('mongodb');

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
    ```

## Additional Information
For more details on `node-cron`, refer to the [node-cron Documentation](https://www.npmjs.com/package/node-cron).