const express = require('express');
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');

const router = express.Router();

router.post('/', createBook);
router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
