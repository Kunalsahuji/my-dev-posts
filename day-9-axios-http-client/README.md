# Day 9 – Axios HTTP Client in MERN Stack

- 🗓️ Date: 2025-05-02  
- 👨‍💻 Author: Kunal Sahuji  
🏷️ Tags: MERN, MERNStack, WebDevelopment, FullStackDeveloper, NodeJS, Express, ReactJS, MongoDB, Axios, RESTAPI, API, BackendDevelopment, FrontendDevelopment, APIDevelopment, SoftwareEngineering, ProblemSolving, GitHubProjects, CleanCode, JavaScript, TypeScript, OpenToWork, JobSeeker, LinkedInDev

- 📦 GitHub: [my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-9-axios-http-client/README.md)  
- 🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)
- 📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)

# 📌Introduction

Axios is a promise-based HTTP client for both the browser and Node.js. It simplifies HTTP requests and is commonly used in MERN stack applications for data fetching and interaction with APIs.

## 🔍 Why Axios?

- Promise-based and supports async/await
- Automatically handles JSON data
- Improved error handling with structured responses
- Works on both client (React) and server (Node.js)

---
### 🚀 Frontend (React) Example:


```javascript

import axios from 'axios';

const fetchBooks = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/books');
    console.log('Books:', response.data);
  } catch (error) {
    console.error('Error fetching books:', error.response?.data || error.message);
  }
};

```
---
### 🌐 Backend (Node.js) Example:


```javascript

const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => console.log(res.data))
  .catch(err => console.error(err.message));

```
---

`💡 Use Axios for smoother API calls, better error handling, and cleaner code — across your entire MERN stack.`
`Let’s level up our API game! 🧠`

## 📌 Stay tuned for more daily insights!  
- 📎 GitHub Repo: [github.com/Kunalsahuji/my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts)  
- 📎 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)
- 📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)

#100DaysOfMERN #Axios #MERNStack  #NodeJS #FullStackDevelopment  #WebDevelopment #FullStackDeveloper #NodeJS #Express #ReactJS #MongoDB #Axios #RESTAPI #API #BackendDevelopment #FrontendDevelopment #APIDevelopment #SoftwareEngineering #ProblemSolving #GitHubProjects #CleanCode #JavaScript #TypeScript #OpenToWork #JobSeeker #LinkedInDev

---
## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-9-axios-http-client.git
cd day-9-axios-http-client
```

## 📦 Installation
### Frontend:

```bash

cd frontend npm install axios react react-dom

```
---
### Backend:

```bash

cd backend npm install express

```

---
## 🧩 Folder Breakdown

- `frontend/`: React app that uses Axios to fetch data.
    
- `backend/`: Basic Express API that sends JSON data.
    
## 📁 Folder Structure: `day-09-axios-http-client/`

```pgsql

day-09-axios-http-client/
├── frontend/
│   ├── axiosClient.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.html
│
├── backend/
│   ├── controllers/
│   │   └── bookController.js     
│   ├── routes/
│   │   └── bookRoutes.js         
│   ├── server.js                 
│   └── package.json
│
├── README.md
└── .gitignore


```
---


## 📁 `frontend/axiosClient.js`
```javascript
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;

```
## 📁 `frontend/App.jsx`

```jsx

import { useEffect, useState } from 'react';
import axiosClient from './axiosClient';

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const res = await axiosClient.get('/books');
      setBooks(res.data);
    } catch (err) {
      console.error('Error fetching books:', err.message);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>📚 Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

```
---

## 📁 `frontend/main.jsx`


```javascript

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

## 📁 `frontend/index.html`


```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Axios Example</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="./main.jsx"></script>
</body>
</html>


```
---

## 📁 `backend/server.js`


```javascript

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const bookRoutes = require('./routes/bookRoutes'); 

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// Routes
app.use('/api/books', bookRoutes);
  
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```
---

## 📁 `backend/controllers/bookController.js`


```js

exports.createBook = (req, res, next) => {
    res.json([
        { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
        { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
        { id: 3, title: 'Design Patterns', author: 'Erich Gamma' },
        { id: 4, title: 'Refactoring', author: 'Martin Fowler' },
        { id: 5, title: 'The Mythical', author: 'Fred Brooks' },
        { id: 6, title: 'Code Complete', author: 'Steve McConnell' },
        { id: 7, title: 'The Clean Coder', author: 'Robert C. Martin' },
        { id: 8, title: 'Domain-Driven Design', author: 'Eric Evans' },
        { id: 9, title: 'Working Effectively with Legacy Code', author: 'Michael Feathers' },
       { id: 10, title: 'Continuous Delivery', author: 'Jez Humble' }
    ]);
}

```

---
## 📁 `backend/routes/bookRoutes.js`


```js
// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const { createBook } = require('../controllers/bookController');

router.get('/', createBook);

module.exports = router;

```

---
## 📁 `backend/package.json`


```json

{
  "name": "axios-backend",
  "version": "1.0.0",
  "main": "server.js",
  "license": "MIT",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2"
  }
}

```
---

### 🔗 Learn more in my GitHub post with full explanation and file structure:

👉 GitHub: [kunalsahuji/my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts)
📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)
🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)

🎯 Let’s keep decoding the web — one response code at a time!
Part of my #100DaysOfMERN journey.  
Building in public, learning every day. 🚀

#100DaysOfMERN #MERN #MERNStack #WebDevelopment #NodeJS #Express #ExpressJS #ReactJS #MongoDB #RESTAPI #HTTPStatus #API #BackendDevelopment #FullStackDeveloper #APIDevelopment #SoftwareEngineering #ProblemSolving #GitHubProjects #LinkedInDev #OpenToWork #JobSeeker
