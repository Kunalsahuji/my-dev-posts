# 🟢 Day 8 — HTTP Status Codes in MERN Stack 🌐

🗓️ Date: 2025-05-02  
👨‍💻 Author: Kunal Sahuji  
🏷️ Tags: MongoDB, CRUD, Mongoose, Express, Backend, MERN  
📦 GitHub: [my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-8-http-status-code)  
🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)
📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)

## 📌 Introduction

HTTP status codes are standard responses from the server to the client that **indicate the result of a request**.  
In a MERN application, correctly using these codes **improves communication**, **enhances debugging**, and **ensures cleaner API development**.

---

## 🚀 Why Use HTTP Status Codes?

- 🧩 **Communicate success or failure** between frontend and backend.  
- 🔧 **Improve debugging** and API maintenance.  
- 🔒 **Help frontend apps handle errors gracefully.**  
- 📊 **Provide standardized responses** for API consumers.  

---

## 🔢 Categories of HTTP Status Codes  

| Code Range | Category         | Description                        |
|------------|----------------|-----------------------------------|
| **1xx**    | Informational   | Request received, still processing |
| **2xx**    | Success        | Request completed successfully |
| **3xx**    | Redirection    | Further action needed |
| **4xx**    | Client Error   | Bad request from the user |
| **5xx**    | Server Error   | Issue on the server side |

---

## 🛠️ Example: Using HTTP Status Codes in Express  


##### 🛠️ Common HTTP Status Codes in MERN Stack:


```js
// Success
res.status(200).json({ message: "Data fetched successfully" });

// Resource Created
res.status(201).json({ message: "New user created!" });

// Bad Request
res.status(400).json({ error: "Missing required fields" });

// Unauthorized
res.status(401).json({ error: "Invalid token" });

// Forbidden
res.status(403).json({ error: "Access denied" });

// Not Found
res.status(404).json({ error: "Resource not found" });

// Server Error
res.status(500).json({ error: "Internal server error" });

```

---
### 📁 Folder Structure for VS Code GitHub Repo:


```lua
day08-http-status-codes/
├── backend/
│   ├── controllers/
│   │   └── userController.js
│   ├── routes/
│   │   └── userRoutes.js
│   └── server.js
├── README.md
├── .gitignore
├── package.json
└── .env
```

---
### 📄 `controllers/userController.js`  

```javascript
exports.createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  // Simulating DB operation
  const newUser = { id: 1, name, email };

  res.status(201).json({
    message: "User created successfully.",
    user: newUser,
  });
};
```

---
### File: `routes/userRoutes.js`

```js
const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');

router.post('/users', createUser);

module.exports = router;
```

---
### File: `app.js`

```js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/api', userRoutes);

module.exports = app;

```

---
## 📦 Installation & Usage

```bash

npm install express dotenv
npm start

```

- Make a POST request to `http://localhost:5000/api/users` with JSON body:

```json
{
  "name": "John",
  "email": "john@example.com"
}

```

---
## ✅ Best Practices

- Always include meaningful messages with status codes.
    
- Avoid generic errors like just `res.send("error")`.
    
- Centralize error handling with middleware for consistency.
    

---

## 📚 Related Status Codes

- `200 OK` – Request successful
    
- `201 Created` – New resource created
    
- `400 Bad Request` – Client-side error
    
- `401 Unauthorized` – Auth required or failed
    
- `403 Forbidden` – Not allowed
    
- `404 Not Found` – Resource doesn't exist
    
- `500 Internal Server Error` – Something went wrong on server

---
### 🧠 Key Tips:

- Use **status codes** + **message** for clarity
    
- Avoid vague responses like just `res.send("error")`
    
- Centralize error handling in Express middlewares

---
### 🔗 Learn more in my GitHub post with full explanation and file structure:

👉 GitHub: [kunalsahuji/my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts)

🎯 Let’s keep decoding the web — one response code at a time!
Part of my #100DaysOfMERN journey.  
Building in public, learning every day. 🚀

#100DaysOfMERN #MERN #MERNStack #WebDevelopment #NodeJS #Express #ExpressJS #ReactJS #MongoDB #RESTAPI #HTTPStatus #API #BackendDevelopment #FullStackDeveloper #APIDevelopment #SoftwareEngineering #ProblemSolving #GitHubProjects #LinkedInDev #OpenToWork #JobSeeker

