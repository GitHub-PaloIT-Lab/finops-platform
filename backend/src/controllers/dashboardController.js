const axios = require('axios');

exports.getDashboard = async (req, res) => {
  const { teamId } = req.query;
  // Fetch customizable dashboard
  res.send('Dashboard fetched');
};