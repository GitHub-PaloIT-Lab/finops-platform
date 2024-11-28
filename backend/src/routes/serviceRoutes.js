const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.get('/reliability', serviceController.getServiceReliability);

module.exports = router;