const express = require('express');
const router = express.Router();
const { createItem, getItems, updateItem, deleteItem } = require('../controllers/taskController');

router.post('/items', createItem);
router.get('/items', getItems);
router.put('/items/:id', updateItem);
router.delete('/items/:id', deleteItem);

module.exports = router;
