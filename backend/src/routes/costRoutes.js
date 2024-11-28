const express = require('express');
const router = express.Router();
const costController = require('../controllers/costController');

router.get('/optimization', costController.getCostOptimization);

module.exports = router;