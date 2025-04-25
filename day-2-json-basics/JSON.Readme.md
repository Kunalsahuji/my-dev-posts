# 🟢 Day 2 – JSON for Web Developers

🗓️ Date: 2025-04-25  
👨‍💻 Author: Kunal Sahuji  
🏷️ Tags: JSON, Web Development, MERN, JavaScript  
🖼️ Cover Image: `images/json-cover.png`  
📦 GitHub: [github.com/Kunalsahuji/my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts)  
🔗 LinkedIn: [linkedin.com](https://linkedin.com)

---

## 🚀 Introduction

Let’s talk about one of the most essential data formats in web development – **JSON** 🚀

---

## 📌 What is JSON?

**JSON (JavaScript Object Notation)** is a lightweight format used to **store and exchange data** between the **client and server**.  
It’s readable, easy to work with, and supported across nearly every language.

```json
{
  "name": "Kunal",
  "role": "Full Stack Developer",
  "skills": ["React", "Node.js", "MongoDB"]
}

💡 Why Use JSON?
✅ Easy to read and write

✅ Lightweight and efficient for APIs

✅ Native support in JavaScript

✅ Perfect for config files, API communication, and databases like MongoDB

🔁 Convert JavaScript ↔ JSON
👉 Convert JavaScript Object to JSON

const user = { name: "Kunal", age: 22 };
const jsonData = JSON.stringify(user);
console.log(jsonData); // {"name":"Kunal","age":22}
👈 Convert JSON to JavaScript Object
js
Copy
Edit
const jsonStr = '{"name": "Kunal", "age": 22}';
const userObj = JSON.parse(jsonStr);
console.log(userObj.name); // Kunal
🧠 Common Use Cases
🎨 Frontend – Fetch API data and render it

⚙️ Backend – Send JSON responses using Express.js

🛢️ Database – MongoDB stores documents in JSON-like format (BSON)

🌐 Frontend Example (JavaScript)

// Fetching JSON data from an API and rendering it
fetch('http://localhost:3000/api/data')
  .then(res => res.json())
  .then(data => {
    console.log("User Name:", data.name);
    document.getElementById('user').textContent = data.name;
  })
  .catch(err => console.error("Error:", err));
🖥️ Backend Example (Express.js)

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/data', (req, res) => {
  const data = {
    name: 'Kunal',
    role: 'Full Stack Developer',
    stack: ['MongoDB', 'Express', 'React', 'Node.js']
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});


📌 Final Note
Day 2 of my dev journal – Let’s keep learning together! 🚀

If you liked this post or have suggestions, drop them in the comments or share your own examples!