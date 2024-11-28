const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/aggregate', dataController.getDataAggregation);

module.exports = router;