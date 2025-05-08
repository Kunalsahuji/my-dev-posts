# Day 15 – Handling React Forms with Controlled Components

  

- 🗓️ Date: 2025-05-09  
- 👨‍💻 Author: Kunal Sahuji  
🏷️ Tags: MERN, React, ReactJS, ControlledComponents, FormHandling, JavaScript, FrontendDevelopment, FullStackDeveloper, CleanCode, GitHubProjects, OpenToWork, LinkedInDev

- 📦 GitHub: [my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-15-controlled-components)  
- 🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)  
- 📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)

# 📌Introduction

Controlled components are form inputs whose values are managed by the React component state. This provides complete control over form behavior, data validation, and real-time feedback.

## 🔍 Why Controlled Components?

- Maintain internal state for inputs
- Validate as you type
- Cleaner data flow
- Debug with ease  
---

### ✍️ Basic Code Example:


```jsx

const [email, setEmail] = useState("");

<input 
  type="email" 
  value={email} 
  onChange={(e) => setEmail(e.target.value)} 
/>

```
---

### 🧠 Real-World Use Case:

Imagine building a signup/login form, feedback form, or contact form — controlled components ensure clean, maintainable, and validated form handling in your React apps.

---

### 🚀 Key Takeaway:

Always go for **controlled inputs** unless you have a very specific use case for uncontrolled ones (e.g., file uploads or third-party libraries).

---
## 🚀 Getting Started

### 1. Clone the Repository

```bash

git clone https://github.com/Kunalsahuji/my-dev-posts.git
cd day-15-controlled-components

```

### 2. Install Dependencies

```bash

npm install

```
### 3. Run the App

```bash
npm run dev
```
---
## 📁 Folder Structure: `day-15-controlled-components/`

```bash
day-15-controlled-components/
├── src/
│   ├── components/
│   │   └── Form.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md

```

---
## 📁 Code Files

### 📁 `src/components/Form.jsx`


```jsx

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/display', { state: { name, email } });
    };
    
    return (
       <form onSubmit={handleSubmit}>
            <div style={{ textAlign: 'center' }}>
                <h1>Controlled Component</h1>
                <h2>Form</h2>
                <p>Enter your name and email in the form below:</p>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
               <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
export default Form

```

### 📁 `src/App.jsx`

```jsx
import { BrowserRouter as Router, Routes, Route, BrowserRouter,Link } from 'react-router-dom';
import Form from './components/Form';
import Display from './components/Display';
import './App.css'

const App = () => {

    return (
        <BrowserRouter>
           <div className="App">
                <nav style={{ margin: '20px', fontSize: '20px', fontWeight: 'bold', gap: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                   <Link to="/">Form</Link>
                    <Link to="/display">Display</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/display" element={<Display />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default App

```

### 📁 `src/components/Display.jsx`

```jsx
import { useLocation } from 'react-router-dom';

const Display = () => {
    const location = useLocation();
    const { name, email } = location.state || { name: '', email: '' };
    console.log(location.state);
    
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Controlled Component</h1>
            <h2>Display</h2>
            <p>Data submitted from the form:</p>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
        </div>
    )
}
export default Display

```

---

Refer to GitHub repo for all full-length files:  

🔗 [kunalsahuji/my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-15-controlled-components)

---

🎯 Keep building forms the React way — controlled, validated, and smart!
Part of my #100DaysOfMERN journey 🚀

### Connect with me🔗
🔗 GitHub: [kunalsahuji/my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-15-controlled-components)  
📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)  
🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)

#100DaysOfMERN #React #ReactForms #ControlledComponents #MERNStack #FrontendDevelopment #FormHandling #WebDevelopment #FullStackDeveloper
