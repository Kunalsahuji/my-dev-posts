const express = require('express');
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  serchBooks,
} = require('../controllers/bookController');

const router = express.Router();

router.post('/', createBook);
router.get('/', getAllBooks);
router.get('/search', serchBooks);
router.get('/:id', getBookById);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;

//🌐 Example API Calls

//✅ Using req.query for pagination and sorting:
//GET http://localhost:5000/api/books?page=1&limit=3&sort=asc
//Response:

// [
//   { "title": "Eloquent JavaScript" },
//   { "title": "JavaScript: The Good Parts" },
//   { "title": "Learning React" }
// ]

// ✅ Using req.params to get a book by ID:

// GET http://localhost:5000/api/books/6612dd0e9b15aab07e18ef87
// Response:

// {
//   "_id": "6612dd0e9b15aab07e18ef87",
//   "title": "MongoDB Mastery",
//   "author": "Kunal Sahuji",
//   "price": 19.99
// }