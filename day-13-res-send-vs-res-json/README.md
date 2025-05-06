# 🟢 Day 13 — res.send() vs res.json(): Response Methods in Express.js ⚡

🗓️ Date: 2025-05-07  
👨‍💻 Author: Kunal Sahuji  
🏷️ Tags: Express.js, Node.js, MERN, API, Backend  
📦 GitHub: [my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-13-res-send-vs-res-json)  
🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)  
📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)  

---

## 📌 Introduction

Express.js provides powerful response methods like `res.send()` and `res.json()` — but which one should you use when returning data from your API? Let’s explore the differences and best practices using a basic example.

---

## 🔁 res.send() vs res.json()

| Feature        | `res.send()`                            | `res.json()`                            |
| -------------- | ---------------------------------------- | ---------------------------------------- |
| Data Type      | Sends string, object, buffer, etc.       | Sends JSON only                          |
| Auto Headers   | Infers `Content-Type` automatically      | Sets `Content-Type: application/json`    |
| Usage          | General purpose response method          | Ideal for API responses                  |
| Converts Object| Yes, converts object to JSON             | Yes, with better control                 |

---
### 🔍 **Topic**: `res.send()` vs `res.json()`

- 🧩 **What is `res.send()`?**  
	Sends a response of various types (string, object, buffer). Automatically sets `Content-Type` based on data.

- 🧩 **What is `res.json()`?**  
	Sends a JSON response. It also sets the `Content-Type` header to `application/json` automatically.

---
### ✅ VS Code Folder Structure 📂:

```pgsql
day-13-res-send-vs-res-json/
├── backend/
│   ├── controllers/responseController.js
│   ├── routes/responseRoutes.js
│   └── server.js
├── README.md
├── package.json

```

---
####  1. 📁 `backend/controllers/responseController.js`

```js
// backend/controllers/responseController.js

// Controller using res.send()
const sendTextResponse = (req, res) => {
  res.send("Hello from res.send() - sends plain text or auto-converted string.");
};

// Controller using res.json()
const sendJsonResponse = (req, res) => {
  res.json({
    message: "Hello from res.json()",
    info: "res.json() sends JSON with proper headers and content-type."
  });
};

module.exports = { sendTextResponse, sendJsonResponse };

```

---

#### 2. 📁 `backend/routes/responseRoutes.js`

```js
// backend/routes/responseRoutes.js

const express = require("express");
const router = express.Router();
const { sendTextResponse, sendJsonResponse } = require("../controllers/responseController");

// Route using res.send()
router.get("/send", sendTextResponse);

// Route using res.json()
router.get("/json", sendJsonResponse);

module.exports = router;

```

---
#### 3. 📁 `backend/server.js`

```js
// backend/server.js

const express = require("express");
const responseRoutes = require("./routes/responseRoutes");

const app = express();
const PORT = 5000;

// Middleware (optional)
app.use(express.json());

// Routes
app.use("/api/response", responseRoutes);

// Root
app.get("/", (req, res) => {
  res.send("Welcome to the res.send() vs res.json() demo!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

```

---
## 🌐 Real-world Use Case

Use `res.json()` when sending JSON responses from an API endpoint:

```js
res.json({ success: true, data: user });
```

Use `res.send()` when you need to return HTML or string data:

```js
res.send('<h1>Welcome to Express Server</h1>');
```
---

## 🧠 Key Takeaways

- ✅ Use `res.send()` for general responses (HTML, strings, etc.)
    
- ✅ Use `res.json()` for API endpoints to explicitly return JSON
    
- ✅ `res.json()` makes content type clear and avoids ambiguity
    

---

## 🚀 Setup Instructions

```bash
npm init -y
npm install express
node server.js
```

Visit:

- `http://localhost:5000/send`
    
- `http://localhost:5000/json`
    

---

## 🔗 Connect Me:

👉 GitHub: [kunalsahuji/my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-13-res-send-vs-res-json)  
📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)  
🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)

---

🎯 Mastering response methods helps you write cleaner, more predictable Express APIs.

#100DaysOfMERN #ExpressJS #resSendVsResJson #NodeJS #BackendDev #RESTAPI #FullStackDevelopment #JavaScript #LinkedInDev
