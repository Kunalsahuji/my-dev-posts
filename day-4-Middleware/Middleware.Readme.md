# 🟢 Day 4 – Mastering Middleware in Express.js!

## 🗓️ Date: 2025-04-28  
👨‍💻 Author: Kunal Sahuji  
🏷️ Tags: ExpressJS, NodeJS, Middleware, MERN, Backend  
📦 GitHub: [github.com/Kunalsahuji/my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-4-Middleware)  
🔗 LinkedIn: [linkedin.com](https://www.linkedin.com/in/kunal-sahu-7688ba1b0/)

## 🚀 Introduction

In today's #100DaysOfMERN journey, I explored one of the most critical parts of backend development — **Middleware in Express.js**. 🚀  
Middleware helps control the entire flow between client requests and server responses. 🛠️

---

## 📌 What is Middleware?

Middleware functions in Express.js:

- Have access to `req`, `res`, and `next()`.
    
- Can **modify requests/responses**, **log information**, **handle errors**, or **authenticate**.
    
- Sit between the request and the final response to **control or modify the flow**.
    

👉 Middleware either processes the request/response or passes it to the next function.

---

## 🔥 Why is Middleware Important?

- Centralizes important app logic (authentication, error handling, logging).
    
- Helps keep code clean, modular, and scalable.
    
- Enables powerful third-party integrations like `cors`, `helmet`, and `morgan`.
    

---

## 🔄 Basic Middleware Example


```javascript

const express = require('express'); 
const app = express();  // Logger Middleware 
const logger = (req, res, next) => {   
	console.log(`${req.method} ${req.url}`);   
	next(); // Pass control to next middleware };  
app.use(logger); // Apply middleware globally  
app.get('/', (req, res) => {   
	res.send('Hello Middleware!'); 
});  
app.listen(3000, () => {   
console.log('✅ Server running on http://localhost:3000'); 
});
```

✅ Every time you hit a route, the logger middleware will first log the request method and URL.

---

## ⚡ Error-Handling Middleware Example

```javascript

// Error Handling Middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
};

app.use(errorHandler);
```

👉 If any error occurs in the app, this special middleware will catch and handle it globally.

---

## 🧠 Types of Middleware in Express.js

- 🔹 **Application-level Middleware:**  
    Apply to all routes using `app.use(logger)`.
    
- 🔸 **Router-level Middleware:**  
    Apply only to specific routers using `router.use(middleware)`.
    
- ⚡ **Error-handling Middleware:**  
    Handles errors — has `(err, req, res, next)` signature.
    
- 🏗️ **Built-in Middleware:**  
    Comes with Express like `express.json()` and `express.urlencoded()`.
    
- 🛡️ **Third-party Middleware:**  
    Popular libraries like `cors`, `helmet`, `morgan` for security and performance.
    

---

## 📦 Folder Structure


```pgsql
day-4-Middleware/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── index.html
│   └── script.js
└── README.md
```

---

## 🛠️ Backend Code

📄 backend/server.js


```javascript

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Built-in Middleware
app.use(express.json());
app.use(cors());

// Logger Middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Middleware-powered server!');
});

// Error Handler Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

```

---

## 📄 package.json


```json

{
  "name": "middleware-demo",
  "version": "1.0.0",
  "description": "Express Middleware Example for Day 4",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2"
  }
}

```

---

# Navigate to the backend folder and run:


```bash

npm install
npm start

```

---

Open the frontend/index.html (optional) or test routes via Postman/browser to see middleware in action!

---

## 🎯 Key Takeaways

- Middleware runs **in the order it's defined**.
    
- Always call `next()` unless the middleware ends the response.
    
- Middleware is the **backbone of any Express.js app**.
    
- You can chain multiple middlewares for better code organization.
    

---

## 🔗 Connect with Me

- 📂 GitHub Repository: [View Code on GitHub](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-4-Middleware)
    
- 🔗 LinkedIn Profile: [Connect with me on LinkedIn](https://www.linkedin.com/in/kunal-sahu-7688ba1b0/)
    

---

# 🚀 Keep following my journey as I learn and share every day!

#100DaysOfMERN #MERNStack #WebDevelopment #Backend #ExpressJS #JavaScript #NodeJS #APIs #LearnCoding #DeveloperJourney #DevCommunity #100DaysOfCode