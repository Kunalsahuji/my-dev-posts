# 🟢 Day 7 – MongoDB CRUD Operations with Mongoose

🗓️ Date: 2025-04-30  
👨‍💻 Author: Kunal Sahuji  
🏷️ Tags: MongoDB, CRUD, Mongoose, Express, Backend, MERN  
📦 GitHub: [my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-7-mongodb-crud)  
🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)
📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)

---

## 🚀 Introduction

MongoDB is a NoSQL database commonly used in the MERN stack. It allows developers to store and manipulate data in flexible, schema-less JSON-like documents. Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js that provides schema-based modeling and validation.

---

## 🧠 Why CRUD Operations Matter in MongoDB

CRUD stands for:

- **Create** – Add a new record to the database
- **Read** – Retrieve data
- **Update** – Modify existing data
- **Delete** – Remove data

Every dynamic web application uses CRUD to interact with data — whether it’s managing users, blogs, products, or orders.

---

## 🛠️ Setting Up the Project

### Install Dependencies

```bash
npm install express mongoose dotenv
```

## 🔧 .env File

```ini

PORT=5000 MONGO_URI=mongodb://localhost:27017/crudDB
```
---

## 📁 backend/server.js


```js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ Connection error:', err));

app.listen(process.env.PORT, () => {
  console.log(`✅ Server running on http://localhost:${process.env.PORT}`);
});

```

---

## 📁 backend/models/bookModel.js


```js

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);

```
---

## 📁 backend/controllers/bookController.js


```js

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

// Read All
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read One
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
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

```

---

## 📁 backend/routes/bookRoutes.js


```js

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

```

---

## 🧪 Testing

You can test the CRUD API using tools like:

- Postman
    
- Thunder Client (VS Code Extension)
    
- curl (CLI)
    

---

## ✅ Summary

MongoDB with Mongoose simplifies building dynamic, data-driven applications. In this post, you learned:

- How to create models with Mongoose
    
- Set up controllers for CRUD operations
    
- Organize routes and server configuration
    

---

Let’s connect and keep building!

🔗 [My LinkedIn](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)  
🔗 [My GitHub Repo](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-7-mongodb-crud)

---

#100DaysOfMERN #MongoDB #CRUD #Mongoose #NodeJS #BackendDevelopment #ExpressJS #WebDevelopment