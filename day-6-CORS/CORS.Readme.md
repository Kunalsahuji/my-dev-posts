# 🟢 Day 6 – CORS in MERN Stack Applications

🗓️ Date: 2025-04-29  
👨‍💻 Author: Kunal Sahuji  
🏷️ Tags: CORS, Web Security, MERN, Express.js, React.js  
📦 GitHub: [Kunalsahuji/my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-6-CORS)  
🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0/)

---

## 🚀 Introduction

CORS (Cross-Origin Resource Sharing) is a critical security concept in web development, especially for full-stack applications like those built with the MERN stack. It governs how resources are shared between frontend and backend servers on different domains or ports.

---

## ❓ What is CORS?

CORS is a browser mechanism that allows (or blocks) web applications running at one origin (e.g., `http://localhost:3000`) to make requests to a server at a different origin (e.g., `http://localhost:5000`).

By default, browsers **block** these cross-origin requests due to security concerns.

---

## 🔐 Why CORS is Important in MERN?

In MERN projects, the React frontend usually runs on a different port (e.g., `3000`) from the Express backend (`5000`). Without enabling CORS on the backend, the frontend cannot access API endpoints.

**Use Cases**:
- API requests from frontend to backend
- File uploads
- Authentication headers
- Third-party API integration

---

## 🛠️ How to Enable CORS in Express.js

### Step 1: Install CORS Middleware

```bash
npm install cors

```

---
##  Step 2: Use CORS in `server.js`

```javascript
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: 'CORS is working!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```
---

## 📁 Folder Structure


```pgsql

day-6-CORS/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── index.html
│   └── script.js
└── README.md

```

---

## 🖥️ Frontend Code Example

### 📄 `frontend/index.html`


```html
<!DOCTYPE html>
<html>
<head>
  <title>CORS Demo</title>
</head>
<body>
  <h1>Frontend Calling Backend</h1>
  <button onclick="callAPI()">Call API</button>
  <p id="output"></p>

  <script src="script.js"></script>
</body>
</html>
```

### 📄 `frontend/script.js`

```javascript
function callAPI() {
  fetch('http://localhost:5000/api/data')
    .then(res => res.json())
    .then(data => {
      document.getElementById('output').innerText = data.message;
    })
    .catch(err => console.error('Error:', err));
}
```
---

## ⚙️ Backend `package.json`


```json

{
  "name": "cors-demo",
  "version": "1.0.0",
  "description": "Day 6 - CORS Demo Backend",
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

## 🧠 Key Takeaways

- CORS is essential for enabling frontend-backend communication.
    
- Must be configured explicitly in Express apps.
    
- Avoids browser errors and improves app integration.
    

---

## 🔗 Connect with Me

📌 GitHub: [Kunalsahuji/my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts)  
📌 LinkedIn: [Kunal Sahuji](https://www.linkedin.com/in/kunal-sahu-7688ba1b0/)

---

🚀 Keep following my journey as I learn and share every day!  
#100DaysOfMERN #WebSecurity #ExpressJS #CORS #ReactJS #FullStackDevelopment