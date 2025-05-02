const express = require('express');
const router = express.Router()
const { createBook } = require('../controllers/bookController')

router.get('/', createBook)

module.exports = router