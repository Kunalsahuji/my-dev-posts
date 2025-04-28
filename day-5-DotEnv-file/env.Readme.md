# 🟢 Day 5 — `.env` Files & Environment Variables in MERN! 🔥

🗓️ Date: 2025-04-27  
👨‍💻 Author: Kunal Sahuji  
🏷️ Tags: Environment Variables, dotenv, MERN, NodeJS, ReactJS  
📦 GitHub: [github.com/Kunalsahuji/my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-5-DotEnv-file)  
🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://linkedin.com/in/kunal-sahu-7688ba1b0)

---

## 🚀 Introduction

Environment variables are **like secret cheat codes** for your app. 🎮  
They let you **store sensitive information**, **hide API keys**, and **switch configs easily** between development and production.  

> Without `.env` files, your database password would be **public**... and hackers would **thank you**. 🫠

---

## 📌 What are Environment Variables?

Environment variables are **key-value pairs** that are stored **outside your code**.  

✅ They make your app **configurable**.  
✅ They **hide private secrets** like **database credentials** & **API keys**.  
✅ They prevent **hardcoded values** that could break in production.  

---

## 🎯 Why Should We Use `.env` in MERN?

🔹 **Security** → Hide API keys, Database URLs, JWT secrets.  
🔹 **Scalability** → Easily switch between `dev`, `test`, and `production`.  
🔹 **Cleaner Code** → No more ugly hardcoded values in your scripts.  

> Using `.env` is **not an option** — it's a **best practice**.

---

## 🔥 Setting Up `.env` in Node.js (Backend)

### 1️⃣ Install `dotenv` (to read `.env` file)

```bash
npm install dotenv
```
---

### 2️⃣ Create a .env file in your project root

```plaintext
PORT=5000
MONGO_URI=mongodb://localhost:27017/mydb
JWT_SECRET=SuperSecretKey
```

---
###  3️⃣ Load `.env` variables in your Node.js server


```javascript
require('dotenv').config();
const express = require('express');
const app = express();

// Using environment variables
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Environment Variables are awesome!');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
```

✅ Now your sensitive secrets are **not** hardcoded in your app! 🚀

---
## 🔥 Using `.env` in React (Frontend)
**React’s Golden Rule:**  
👉 Every environment variable **must** start with `REACT_APP_` — or React will ignore it. 🙄

### Example `.env` file for React:


```plaintext

REACT_APP_API_URL=http://localhost:5000/api

```

---
### Access it inside your React app:


```javascript

const apiUrl = process.env.REACT_APP_API_URL; 
console.log("API Base URL:", apiUrl);

```

✅ React automatically loads this variable at build time.

---

## 📦 Folder Structure


```lua

day-5-env-files/
├── backend/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── .env
│   ├── src/
│   │   ├── App.js
│   │   ├── config.js
│   └── package.json
└── README.md

```

---

## 🛠️ Backend Code (Express.js)

#### 📄 **backend/server.js**


```javascript

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});


```

#### 📄 **backend/.env**


```plaintext

PORT=5000
MONGO_URI=mongodb://localhost:27017/mydb
JWT_SECRET=SuperSecretKey

````

#### 📄 **backend/package.json**

```json


{
  "name": "env-demo-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2"
  }
}

```

---

## 🖥️ Frontend Code (React.js)

#### 📄 **frontend/src/config.js**

```javascript


const apiUrl = process.env.REACT_APP_API_URL; 
export default apiUrl;

```

#### 📄 **frontend/.env**


```plaintext

REACT_APP_API_URL=http://localhost:5000/api

```

#### 📄 **frontend/src/App.js**

```javascript

import React, { useEffect, useState } from "react";
import apiUrl from "./config";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${apiUrl}/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h1>React `.env` Example</h1>
      <p>{message}</p>
    </div>
  );
}

```

---

## 🎯 Key Takeaways

- **Never commit `.env` files** → Use `.gitignore` to hide them.
    
- **Use `dotenv` in Node.js** to access environment variables.
    
- **React only accepts `REACT_APP_` variables** (no exceptions).
    

---

## 🔗 Connect with Me

- 📂 **GitHub Repo**: [View Code on GitHub](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-5-env-files)
    
- 🔗 **LinkedIn**: [Connect with me](https://linkedin.com/in/kunal-sahu-7688ba1b0/)
    

🚀 Keep following my journey as I learn and share every day!

#100DaysOfMERN #MERN #NodeJS #ReactJS #WebDevelopment #Dotenv 