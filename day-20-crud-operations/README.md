# Day 20 - CRUD Operations in MERN Stack



📅 Date: May 14, 2025
  
✍️ Author: Kunalsahuji  

- 🏷️ Tags 🏷️ Tags: CRUD, MERN, MongoDB, ExpressJS, ReactJS, NodeJS, Backend, Frontend, JavaScript, WebDevelopment, FullStackDevelopment, CleanCode, SoftwareEngineer, JobSeeker, HiringDevelopers, OpenToWork

- 📦 GitHub: [my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-19-pagination)
  
- 🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)  

- 📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4) 

---

## 📌 Topic: CRUD Operations in MERN Stack

Today in my #100DaysOfMERN journey, I implemented **CRUD (Create, Read, Update, Delete)** operations in a MERN stack application. CRUD is fundamental for any full-stack developer and understanding how to integrate the full lifecycle of data through frontend and backend interactions is essential.

---


### What are CRUD Operations?

CRUD stands for **Create, Read, Update, and Delete**. These are the basic functions for managing data in applications, and we'll implement them using the MERN stack to build a simple **item management system**.

- **Create**: Add new items to the database.
- **Read**: Fetch items from the database.
- **Update**: Modify an existing item in the database.
- **Delete**: Remove an item from the database.

---

### 💡 How CRUD works in the MERN Stack?

##### ✅ Backend (Node.js + Express + MongoDB):
- Create: POST request using Model.create()

- Read: GET request using Model.find()

- Update: PUT/PATCH request using Model.findByIdAndUpdate()

- Delete: DELETE request using Model.findByIdAndDelete()

##### ✅ Frontend (React.js):
- Interact with the backend using axios or fetch()

- Use state management (useState, useEffect) to display and update data

---



### 💻 Example:

##### Create a simple Task Manager App where users can:

- Add new tasks ✅

- View existing tasks 📋

- Edit tasks ✏️

- Delete tasks ❌

This builds practical skills and reinforces full-stack data flow!


---



### 🔚 Final Thoughts:

Mastering CRUD is non-negotiable in full-stack development. Every major app you use (Instagram, WhatsApp, LinkedIn) uses CRUD behind the scenes. Get this right, and you’ll be able to build powerful, data-driven apps.

---



- 🔗 Check out the complete code + folder structure in GitHub repo

- 📘 Also available in Notion with explained notes and visuals.

### 🔗 Resources:

- 📦 GitHub: [my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-19-pagination)
  
- 🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)  

- 📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4) 


---


## 📁 Folder Structure

```
day-20-crud-operations/
├── backend/
│   ├── controllers/
│   │   └── itemController.js
│   ├── models/
│   │   └── itemModel.js
│   ├── routes/
│   │   └── itemRoutes.js
│   ├── server.js
│   └── config/
│       └── db.js
├── frontend/
│   ├── components/
│   │   └── ItemList.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── axiosClient.js
├── README.md
└── package.json
```

---

## 📄 Code of Each File

### 📁 backend/config/db.js
```js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
```

### 📁 backend/models/itemModel.js
```js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
});

module.exports = mongoose.model('Item', itemSchema);
```

### 📁 backend/controllers/itemController.js
```js
const Item = require('../models/itemModel');

const getItems = async (req, res) => {
  const items = await Item.find();
  res.status(200).json(items);
};

const createItem = async (req, res) => {
  const newItem = await Item.create(req.body);
  res.status(201).json(newItem);
};

const updateItem = async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedItem);
};

const deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: 'Item deleted' });
};

module.exports = { getItems, createItem, updateItem, deleteItem };
```

### 📁 backend/routes/itemRoutes.js
```js
const express = require('express');
const router = express.Router();
const { getItems, createItem, updateItem, deleteItem } = require('../controllers/itemController');

router.route('/').get(getItems).post(createItem);
router.route('/:id').put(updateItem).delete(deleteItem);

module.exports = router;
```

### 📁 backend/server.js
```js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/items', itemRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
```

### 📁 frontend/axiosClient.js
```js
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export default axiosClient;
```

### 📁 frontend/components/ItemList.jsx
```jsx
import { useState, useEffect } from 'react';
import axiosClient from '../axiosClient';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await axiosClient.get('/items');
    setItems(res.data);
  };

  const handleCreate = async () => {
    await axiosClient.post('/items', { name: input, description: desc });
    fetchItems();
    setInput('');
    setDesc('');
  };

  const handleDelete = async (id) => {
    await axiosClient.delete(`/items/${id}`);
    fetchItems();
  };

  return (
    <div>
      <h2>Item List</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Item name" />
      <input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" />
      <button onClick={handleCreate}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name} - {item.description}
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
```

### 📁 frontend/App.jsx
```jsx
import ItemList from './components/ItemList';

function App() {
  return (
    <>
      <ItemList />
    </>
  );
}

export default App;
```

### 📁 frontend/main.jsx
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

---


