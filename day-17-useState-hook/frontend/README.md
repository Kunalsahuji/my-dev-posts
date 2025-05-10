# 🟢 Day 17 — useState in React: Mastering State Management 🔄

📅 Date: May 11, 2025  
✍️ Author: Kunalsahuji  
🏷️ Tags: ReactJS, useState, Hooks, Frontend, JavaScript, MERN  

📦 GitHub: [my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-17-useState-hook)  
🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)  
📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)  

---
## 📌 Introduction

The `useState` Hook is a fundamental feature in React that allows functional components to manage and update state.  

It enables components to "remember" values across renders, making your UI interactive and dynamic.

---
 
## 🔍 Why useState?

✅ Simplifies state management in functional components  
✅ Enables dynamic UI updates based on user interactions  
✅ Replaces the need for class-based components for stateful logic  
✅ Facilitates cleaner and more readable code  

---

## ⚙️ How It Works:

1. **Import useState**  
2. **Initialize State**  
3. **Update State**  

--
## 🧩 Folder Structure


```bash
day-17-usestate-hook/
frontend
├── src/
│   ├── components/
│   │   └── Counter.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.html
├── package.json
└── README.md

```  

---
  
## ✅ VS CODE / GITHUB FILES & FOLDERS


---

### 🔹 `src/components/Counter.jsx`

```jsx

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>You clicked {count} times</h2>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default Counter;

```

### 🔹 src/App.jsx
```jsx

import React from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>React useState Example</h1>
      <Counter />
    </div>
  );
};

export default App;

```

### 🔹 src/main.jsx
```jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

### 🔹 index.html
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>React useState Example</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>

  </body>
</html>

```
### 🔹 package.json
```json

{
  "name": "day-17-usestate-hook",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start"
  }
}

```
---
## 🚀 Getting Started


```bash

git clone https://github.com/Kunalsahuji/my-dev-posts.git
cd my-dev-posts/day-17-usestate-hook
npm install
npm start

```

---
## 🔚 Outro

Thanks for exploring the `useState` Hook with me today!  
Feel free to check out the code and let me know how you utilize `useState` in your projects.

---
  
GitHub 🔗: [my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-17-usestate-hook)  
Notion 📓: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)  
LinkedIn 📣: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)
  
#100DaysOfCode #100DaysOfMERN #ReactJS #useState #MERNStack #WebDevelopment #JavaScript #Frontend #CodeNewbie #DevCommunity