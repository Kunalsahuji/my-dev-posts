
# 🟢 Day 12 — mongoose.Schema vs mongoose.model: Unlocking the Backbone of MongoDB 🚀

🗓️ Date: 2025-05-06 
👨‍💻 Author: Kunal Sahuji  
🏷️ Tags: Mongoose, MongoDB, MERN, Backend, Node.js  
📦 GitHub: [my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-12-Mongoose-Schema-Model)  
🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)  
📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)

---
## 📌 Introduction

Mongoose is a powerful ODM (Object Data Modeling) library for MongoDB and Node.js.

Two core concepts you'll encounter frequently are:

- `mongoose.Schema` — Structure of the document
- `mongoose.model` — Interface for interacting with the database

Let’s break these down using a simple Book API in our MERN stack.

---
## 🧩 mongoose.Schema vs mongoose.model

| Feature          | `mongoose.Schema`                              | `mongoose.model`                              |
| ---------------- | ----------------------------------------------- | ---------------------------------------------- |
| Purpose          | Defines the structure and rules of documents    | Provides the methods to interact with MongoDB  |
| Usage            | `new mongoose.Schema({...})`                   | `mongoose.model('ModelName', schema)`          |
| Analogy          | Blueprint / Template                            | Machine that builds based on the blueprint     |
| Output           | Schema object                                   | Model class (used to query, create, etc.)      |

---
## 🛠️ Book Model Example

### 📁 Folder Structure

```bash
day-12-mongoose-schema-model/
├── backend/
│   ├── models/bookModel.js
│   ├── controllers/bookController.js
│   ├── routes/bookRoutes.js
│   └── server.js
├── README.md
├── package.json
```

---

### 📄 `bookModel.js`

```js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
```

---

### 📄 Usage in Controller

```js
const Book = require('../model/bookModel')

exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body)
        res.status(201).json(book)
    } catch (error) {
        res.status(500).json({ message: error.message })
        console.error(error.message);
    }
}

// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// Get a book by ID

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update a book by ID
exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params
            .id, req.body, { new: true });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete a book by ID
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
```

---
## 🌐 Real-world Example

### ✅ Schema Creation

```js
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});
```

### ✅ Model Definition

```js
const User = mongoose.model('User', userSchema);
```

### ✅ Model Usage

```js
const newUser = await User.create({ username: 'kunal', email: 'kunal@example.com' });
```

---
## 🧠 Key Takeaways

- Use `Schema` to define structure, types, validations, and rules.
- Use `Model` to create, find, update, and delete documents.
- One schema can have multiple models (across collections).

---
## 🚀 Setup Instructions

```bash
npm install mongoose
npm run server
```

Ensure `.env` includes `MONGO_URI` and MongoDB is running.

---
## 🔗 GitHub + Notion

👉 GitHub: [kunalsahuji/my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-12-mongoose-schema-model)  
📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)  
🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)

---

🎯 Understanding the difference between `Schema` and `Model` is foundational to mastering Mongoose.

#100DaysOfMERN #Mongoose #MongoDB #NodeJS #MERNStack #BackendDev #APIDesign #FullStackDevelopment #LinkedInDev #OpenToWork
