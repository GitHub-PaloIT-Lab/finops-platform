
const cloudProviderService = require('../services/cloudProviderService');

exports.getCloudCosts = async (req, res, next) => {
  try {
    const { provider, project } = req.query;
    if (!provider) {
      return res.status(400).send('Invalid provider');
    }
    const data = await cloudProviderService.getCloudCosts(provider, project);
    res.json(data);
  } catch (error) {
    next(error);
  }
};