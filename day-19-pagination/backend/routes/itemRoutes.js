const express = require('express');
const router = express.Router();
const { getPaginatedItems, createItems } = require('../controller/itemController');

router.get('/', getPaginatedItems);
router.post('/', createItems)

module.exports = router;
