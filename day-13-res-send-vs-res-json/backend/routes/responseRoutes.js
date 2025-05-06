const express = require('express');
const router = express.Router();
const { sendTextResponse, sendJsonResponse } = require('../controllers/resoinseController');

// Define routes for sending text and JSON responses
router.get('/send', sendTextResponse);
router.get('/json', sendJsonResponse);

module.exports = router;