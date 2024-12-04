
const express = require('express');
const cloudProviderController = require('../controllers/cloudProviderController');

const router = express.Router();

router.get('/', cloudProviderController.getCloudCosts);

module.exports = router;