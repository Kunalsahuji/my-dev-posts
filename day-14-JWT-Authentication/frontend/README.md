# 🟢 Day 14 — JWT Authentication: Secure your MERN App! 🔐

📅 Date: May 7, 2025  
✍️ Author: Kunalsahuji  
🏷️ Tags: JWT, Authentication, MERN, Backend, React, Node.js, Express  
📦 GitHub: [my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-14-JWT-Authentication)  
🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)  
📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)  

---

## 📌 Introduction

JWT (JSON Web Token) is a popular method for implementing secure authentication in full-stack applications. In a MERN stack project, JWT allows the backend to issue a signed token to the frontend, which is then stored and used for protected routes.

This ensures that only authenticated users can access specific resources — such as user profiles, dashboards, or admin pages.

---

## 🔍 Why JWT in MERN?

✅ Stateless authentication (no sessions)  
✅ Fast and scalable  
✅ Works with REST APIs  
✅ Easily used with `localStorage` or `cookies` on frontend  
✅ Commonly used in production-ready apps

---


## ⚙️ How It Works:

1. ✅ User logs in with email/password
    
2. 🔐 Server validates and sends back a signed JWT token
    
3. 🔑 Client stores the token (usually in localStorage)
    
4. 📬 Protected routes require that token in `Authorization` header

---

## 🔐 Backend JWT Example

```js

// utils/generateToken.js
const jwt = require('jsonwebtoken');
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
module.exports = generateToken;

```

---

## 🚀 Frontend Axios Auth

```js
// frontend/src/axiosClient.js
import axios from 'axios';
const token = localStorage.getItem('token');
export default axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: { Authorization: `Bearer ${token}` }
});

```



## 🧩 Folder Structure

```bash
day-14-jwt-authentication/
├── backend/
│   ├── controllers/
│   │   └── authController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── utils/
│   │   └── generateToken.js
│   ├── models/
│   │   └── userModel.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Login.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── axiosClient.js
│   └── index.html
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
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

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

### 📁 `backend/models/userModel.js`

```js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.matchPassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);

```

### 📁 `backend/utils/generateToken.js`

```js
const jwt = require('jsonwebtoken');
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};
module.exports = generateToken;

```

### 📁 `backend/controllers/authController.js`

```js
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

exports.registerUser = async (req, res) => {
  const { email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const user = await User.create({ email, password });
  res.status(201).json({
    _id: user._id,
    email: user.email,
    token: generateToken(user._id),
  });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

```

### 📁 `backend/routes/authRoutes.js`


```js

const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;

```

### 📁 `backend/.env`

```ini
MONGO_URI=mongodb://localhost:27017/jwt-auth
JWT_SECRET=supersecretjwtkey

```

### 📁 `frontend/src/axiosClient.js`

```js
import axios from 'axios';

const token = localStorage.getItem('token');

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export default axiosClient;

```

### 📁 `frontend/src/components/Login.jsx`

```jsx
import { useState } from 'react';
import axiosClient from '../axiosClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axiosClient.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Logged in!');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

```

### 📁 `frontend/src/App.jsx`

```jsx
import Login from './components/Login';

const App = () => (
  <div>
    <h1>JWT Auth Demo</h1>
    <Login />
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

### Backend


```bash

cd backend npm install node server.js

```

### Frontend

```bash

cd frontend npm install npm run dev

```
## 📂 Folder Structure

Refer to the full folder breakdown in this repo.

## 🔗 Links

- LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)
    
- GitHub: [github.com/Kunalsahuji/my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts)
    
- 🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)

💡 JWT helps build secure and scalable authentication for modern web apps.  
This is a critical part of any MERN developer’s toolkit!

#100DaysOfMERN #JWT #Authentication #ReactJS #Express #MongoDB #MERN #WebDevelopment
