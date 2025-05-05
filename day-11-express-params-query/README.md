
# 🟢 Day 11 — Express `req.params` vs `req.query`: Demystified with Real Book API 📚

🗓️ Date: 2025-05-04  
👨‍💻 Author: Kunal Sahuji  
🏷️ Tags: Express.js, MERN, req.params, req.query, Backend API, Routing  
📦 GitHub: [my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-11-express-params-query/README.md)  
🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)  
📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)

---

## 📌 Introduction

In Express.js, understanding the difference between `req.params` and `req.query` is essential for routing and handling requests properly.

Today, we’ll explore these concepts using our own Book Store API (`http://localhost:5000/api/books`) built in our MERN stack.

---

## 🔍 `req.params` vs `req.query`

| Feature       | `req.params`                         | `req.query`                           |
|---------------|--------------------------------------|----------------------------------------|
| Purpose       | Extract values from the **URL path** | Extract values from the **URL query string** |
| Format        | `/books/:id`                         | `/books?search=react&page=1`           |
| Use Case      | Get a single book by ID              | Search, filter, paginate, sort books   |
| Example URL   | `/books/6612dd0e9b15aab07e18ef87`    | `/books?page=1&limit=5&sort=asc`       |

---

## 🛠️ Backend Book Routes Example

### 📁 Folder Structure

```bash
day-11-express-params-query/
├── backend/
│   ├── controllers/bookController.js
│   ├── routes/bookRoutes.js
│   └── server.js
├── README.md
├── package.json
```

---

### 📄 `bookRoutes.js`

```js
const express = require('express');
const router = express.Router();
const { getBooks, getBookById } = require('../controllers/bookController');

router.get('/', getBooks);
router.get('/:id', getBookById);

module.exports = router;
```

---

### 📄 `bookController.js`

```js
const Book = require('../models/bookModel');

const getBooks = async (req, res) => {
  const { page = 1, limit = 5, sort = 'asc' } = req.query;
  const sortOrder = sort === 'desc' ? -1 : 1;

  try {
    const books = await Book.find()
      .sort({ title: sortOrder })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getBooks, getBookById };
```

---

## 🌐 Example API Calls

### ✅ Using `req.query`:
```
GET http://localhost:5000/api/books?page=1&limit=3&sort=asc
```

### ✅ Using `req.params`:
```
GET http://localhost:5000/api/books/6612dd0e9b15aab07e18ef87
```

---

## 🧠 Best Practices

- Use `req.params` for **required, unique identifiers**
- Use `req.query` for **optional modifiers**
- Validate and sanitize input values

---

## 🚀 Setup Instructions

```bash
npm install
npm run server
```

Ensure MongoDB is running and `.env` is configured with `MONGO_URI`.

---

## 🔗 GitHub + Notion

👉 GitHub: [kunalsahuji/my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-11-express-params-query)  
📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)
🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)
---

🎯 Understanding `req.params` and `req.query` makes you 10x better at API design.

#100DaysOfMERN #ExpressJS #NodeJS #MERNStack #BackendDev #APIDesign #JavaScript #FullStackDevelopment #LinkedInDev #OpenToWork
