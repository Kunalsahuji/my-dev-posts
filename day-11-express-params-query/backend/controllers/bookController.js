const Book = require('../models/bookModel');

// Create
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Update
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// search by req.query
exports.serchBooks = async (req, res) => {
  const { page = 1, limit = 10, sort = 'asc' } = req.query
  const sortOrder = sort === 'asc' ? 1 : -1
  try {
    const books = await Book.find()
      .sort({ title: sortOrder })
      .skip((page - 1) * limit)
      .limit(Number(limit))
    res.status(200).json({
      page: Number(page),
      limit: Number(limit),
      totalBooks: await Book.countDocuments(),
      books,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message });
  }
}

// serach by req.params
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};