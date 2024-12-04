// FILE: services/awsBillingService.js
const AWS = require('aws-sdk');

// Configure AWS SDK
AWS.config.update({ region: 'us-east-1' });

const costExplorer = new AWS.CostExplorer({ apiVersion: '2017-10-25' });

/**
 * Get AWS usage and billing data for the specified time period.
 * @param {string} startDate - The start date in YYYY-MM-DD format.
 * @param {string} endDate - The end date in YYYY-MM-DD format.
 * @returns {Promise} - A promise that resolves to the usage and billing data.
 */
const getUsageAndBillingData = async (startDate, endDate) => {
  const params = {
    TimePeriod: {
      Start: startDate,
      End: endDate,
    },
    Granularity: 'DAILY',
    Metrics: ['BlendedCost', 'UnblendedCost', 'UsageQuantity'],
  };

  try {
    const data = await costExplorer.getCostAndUsage(params).promise();
    return data;
  } catch (error) {
    console.error('Error fetching usage and billing data:', error);
    throw error;
  }
};

module.exports = {
  getUsageAndBillingData,
};