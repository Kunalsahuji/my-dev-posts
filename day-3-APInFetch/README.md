# 🟢 Day 3 – Understanding API and Fetching Data in Web Development

🗓️ Date: 2025-04-26  
👨‍💻 Author: Kunal Sahuji  
🏷️ Tags: API, Fetch, Web Development, MERN, JavaScript
📦 GitHub: [github.com/Kunalsahuji/my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/edit/main/day-3-APInFetch/README.md)  
🔗 LinkedIn: [linkedin.com](https://www.linkedin.com/in/kunal-sahu-7688ba1b0/)
📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)

---

## 🚀 Introduction

In modern web development, connecting the **frontend and backend** or integrating third-party services is a daily task.  
That's where **APIs (Application Programming Interfaces)** and **fetching data** come into play. 🔥

---

## 📌 What is an API?

**API** is a set of rules and endpoints that allow different software applications to talk to each other.

Examples:
- Weather app fetching live data 🌦️
- E-commerce site showing payment gateways 💳
- News app displaying latest articles 📰

---

## 🔄 How to Fetch API Data in JavaScript?

### 🔹 Basic Example Using `fetch()`

```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log("Fetched Data:", data);
  })
  .catch(error => {
    console.error("Error fetching API:", error);
  });
  ```

---

## 📦 Folder Structure

day-3-APInFetch/ ├── backend/ │ ├── server.js │ └── package.json ├── frontend/ │ ├── index.html │ └── script.js └── README.md

```
---


## 🔥 How It Works

✅ Frontend makes a **fetch** request to the backend.  
✅ Backend responds with **JSON data**.  
✅ Frontend receives and displays the data dynamically.

---

## 🖥️ Frontend Code

📄 `frontend/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>API Fetch Example</title>
</head>
<body>
  <h1>Frontend Fetch Example</h1>
  <button id="fetchData">Get Message</button>
  <p id="output"></p>

  <script src="script.js"></script>
</body>
</html>
```

---
## 📄 frontend/script.js

```javascript
document.getElementById('fetchData').addEventListener('click', () => {
  fetch('http://localhost:3000/api/hello')
    .then(response => response.json())
    .then(data => {
      document.getElementById('output').textContent = data.message;
    })
    .catch(error => console.error('Error:', error));
});

```
---

## 🛠️ Backend Code

📄 backend/server.js

```javascript
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());

// Simple API Route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend server!' });
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```
---

## 📄 package.json

```json
{
  "name": "api-fetch-backend",
  "version": "1.0.0",
  "description": "Backend server for Day 3 Fetch API example",
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

	Open the frontend/index.html in your browser.

	 Click the "Get Message" button to fetch data from the backend!


---

## 🔗 Connect with Me

- 📂 **GitHub Repo**: [View Code on GitHub](https://github.com/Kunalsahuji/my-dev-posts/)
    
- 🔗 **LinkedIn**: [Connect with me](https://linkedin.com/in/kunal-sahu-7688ba1b0/)
    
- 🔗 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)
---

🚀 Keep following my journey as I learn and share every day!

#100DaysOfMERN #MERN #NodeJS #ReactJS #WebDevelopment #Dotenv  #APIs #FETCH #RESTFULL_APIs