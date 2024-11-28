const express = require('express');
const router = express.Router();
const decisionController = require('../controllers/decisionController');

router.post('/automate', decisionController.automateDecision);

module.exports = router;