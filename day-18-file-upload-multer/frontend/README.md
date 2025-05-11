
# 🟢 Day 18 — File Upload with Multer: Handle Files Like a Pro! 📁

📅 Date: May 11, 2025  
✍️ Author: Kunalsahuji  
🏷️ Tags: Multer, File Upload, Node.js, Express, MERN, Backend  
📦 GitHub: [my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-18-file-upload-multer)  
🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)  
📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)  

---

## 📌 Introduction

Handling file uploads is a crucial feature in modern web applications. In the MERN stack, we use `Multer`, a middleware for handling `multipart/form-data`, for easy and secure file uploads in Node.js and Express.

---

## 🔍 Why Multer for File Uploads?

✅ Simple middleware for file upload  
✅ Supports multiple file formats  
✅ Integrates with Express easily  
✅ Secure and customizable file storage  
✅ Commonly used in image, PDF, and document upload features  

---

## ⚙️ How It Works:

1. 📤 User selects file from frontend form  
2. 🧩 File is sent via `multipart/form-data`  
3. 🗂️ Multer stores it in a destination folder or memory  
4. 📝 Server returns uploaded file info to the client  

---

## 🔐 Backend Multer Setup

```js
// backend/middleware/uploadMiddleware.js
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

module.exports = upload;
```

---

## 🚀 Frontend File Upload (Axios)

```jsx
// frontend/src/components/FileUpload.jsx
import { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData);
      alert('File uploaded: ' + res.data.filename);
    } catch (err) {
      alert('Upload failed');
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
```

## 🧩 Folder Structure

```bash
day-18-file-upload-multer/
├── backend/
│   ├── routes/
│   │   └── uploadRoutes.js
│   ├── middleware/
│   │   └── uploadMiddleware.js
│   ├── uploads/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── FileUpload.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
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
const uploadRoutes = require('./routes/uploadRoutes');
const path = require('path');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/upload', uploadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
```

### 📁 `backend/routes/uploadRoutes.js`
```js
const express = require('express');
const upload = require('../middleware/uploadMiddleware');
const router = express.Router();

router.post('/', upload.single('file'), (req, res) => {
  res.json({ filename: req.file.filename });
});

module.exports = router;
```

### 📁 `backend/middleware/uploadMiddleware.js`
```js
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });
module.exports = upload;
```

### 📁 `backend/.env`
```ini
PORT=5000
```

### 📁 `frontend/src/components/FileUpload.jsx`
```jsx
import { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData);
      alert('File uploaded: ' + res.data.filename);
    } catch (err) {
      alert('Upload failed');
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
```

### 📁 `frontend/src/App.jsx`
```jsx
import FileUpload from './components/FileUpload';

const App = () => (
  <div>
    <h1>File Upload Demo</h1>
    <FileUpload />
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

### 📁 `frontend/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>File Upload</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

### 📦 Backend
```bash
cd backend
npm install
node server.js
```

### 🚀 Frontend
```bash
cd frontend
npm install
npm run dev
```

## 📂 Folder Structure

Refer to the full folder breakdown in this repo.

## 🔗 Links

- LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)  
- GitHub: [github.com/Kunalsahuji/my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts)  

💡 `Multer` makes it seamless to handle file uploads and is essential for apps that deal with user-generated content like resumes, photos, and documents.

#100DaysOfMERN #Multer #FileUpload #ExpressJS #NodeJS #ReactJS #MERN #WebDevelopment
