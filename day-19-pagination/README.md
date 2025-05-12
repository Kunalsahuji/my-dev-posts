  

# 🟢 Day 19 — Pagination in MERN Stack 📄

  

📅 Date: May 13, 2025
  
✍️ Author: Kunalsahuji  

🏷️ Tags: Pagination, MERN, Backend, React, Node.js, Express, MongoDB 
 
📦 GitHub: [my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-19-pagination)  

🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)  

📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)  


---
## 📌 Introduction

Pagination is essential for managing and displaying large datasets efficiently in web applications. In a MERN stack application, implementing pagination ensures that users can navigate through data seamlessly without overwhelming the client or server.

---
## 🔍 Why Implement Pagination? 

✅ Enhances performance by loading data in chunks  
✅ Improves user experience with manageable data views  
✅ Reduces server load and bandwidth usage  
✅ Essential for scalability in applications with large datasets 

---
## ⚙️ How Pagination Works:

1. ✅ Client requests a specific page number and limit (items per page)  
2. 🔄 Server calculates the number of documents to skip based on the page and limit  
3. 📄 Server retrieves the specified number of documents and sends them to the client  
4. 🔢 Client displays the data and provides navigation controls for other pages  
---
## 🧩 Folder Structure

```bash

day-19-pagination/
├── backend/
│   ├── controllers/
│   │   └── itemController.js
│   ├── models/
│   │   └── itemModel.js
│   ├── routes/
│   │   └── itemRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── ItemList.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── axiosClient.js
│   └── index.html
└── README.md

```

  

---

  

## ✅ VS CODE / GITHUB FILES & FOLDERS

### 📁 `backend/server.js`


```js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

```

### 📁 `backend/config/db.js`

```js
const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
module.exports = connectDB;

```

### 📁 `backend/models/itemModel.js`


```js

const mongoose = require('mongoose');  const itemSchema = new mongoose.Schema({   name: { type: String, required: true },   description: String, });  module.exports = mongoose.model('Item', itemSchema);

```

### 📁 `backend/controllers/itemController.js`

```js


const Item = require('../model/itemModel');

const getPaginatedItems = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  try {
    const items = await Item.find().skip(skip).limit(limit);
    const total = await Item.countDocuments();
    res.status(200).json({
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      total_data: total,
      data: items,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error });
  }
};

const createItems = async (req, res) => {
  try {
    const item = await Item.create(req.body)
    res.status(201).json({
      message: 'Item Created!',
      item
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({ error: error.message })
  }
}

module.exports = { getPaginatedItems, createItems };


```
### 📁 `backend/routes/itemRoutes.js`

```js


const express = require('express');
const { getPaginatedItems, createItems } = require('../controller/itemController');

const router = express.Router();

router.get('/', getPaginatedItems);
router.post('/', createItems)

module.exports = router;

```

### 📁 `backend/.env`

```ini

MONGO_URI=mongodb://localhost:27017/pagination-demo

```

### 📁 `frontend/src/axiosClient.js`

```js

import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;

```

### 📁 `frontend/src/components/ItemList.jsx`

```jsx
import { useState, useEffect } from 'react';
import axiosClient from '../axiosClient';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchItems = async (page) => {
    try {
      const res = await axiosClient.get(`/items?page=${page}&limit=5`);
      setItems(res.data.items);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchItems(page);
  }, [page]);

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <span> Page {page} of {totalPages} </span>
        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ItemList;


```

### 📁 `frontend/src/App.jsx`

```jsx
import ItemList from './components/ItemList';

const App = () => (
  <div>
    <h1>Pagination Demo</h1>
    <ItemList />
  </div>
);

export default App;


```


### 📁 `frontend/src/main.jsx`

```jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


```

---

## 🛠️ Running the Application

### Backend

```bash

cd backend
npm install
node server.js

```
### Frontend

```bash

cd frontend
npm install
npm run dev

```
---

## 🔗 Links

- LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)
    
- GitHub: [github.com/Kunalsahuji/my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts)
    
- Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)
    

---

💡 Implementing pagination is crucial for building efficient and user-friendly applications. It ensures that your app remains performant and scalable as your data grows.

#100DaysOfMERN #Pagination #ReactJS #Express #MongoDB #MERN #WebDevelopment