const express = require('express');
const router = express.Router();

const OpenBankingController = require('./controllers/openBaningController');

router.get('/', OpenBankingController.GetParticipants)

module.exports = router;