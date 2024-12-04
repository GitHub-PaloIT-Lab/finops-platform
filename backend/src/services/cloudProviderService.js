
const fs = require('fs');
const csv = require('csv-parser');

const dataFiles = {
  aws: 'data/aws-costs.csv',
  azure: 'data/azure-costs.csv',
  gcp: 'data/gcp-costs.csv',
  vmware: 'data/vmware-costs.csv'
};

exports.getCloudCosts = (provider, project) => {
  return new Promise((resolve, reject) => {
    if (!dataFiles[provider]) {
      return reject('Invalid provider');
    }

    const results = [];
    fs.createReadStream(dataFiles[provider])
      .pipe(csv())
      .on('data', (data) => {
        if (!project || data['Project ID'] === project || data['Subscription ID'] === project) {
          results.push(data);
        }
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};