# 🟢 Day 10 — React useEffect Hook: The Heartbeat of Side Effects ⚛️

🗓️ Date: 2025-05-03  
👨‍💻 Author: Kunal Sahuji  
🏷️ Tags: React, MERN, useEffect, API Calls, Side Effects, Hooks  
📦 GitHub: [my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-10-useEffect)  
🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)  
📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)

---

## 📌 Introduction

In React, the `useEffect` hook allows functional components to perform side effects — such as fetching data, setting up subscriptions, or directly interacting with the DOM.

In a MERN stack application, `useEffect` is key to handling asynchronous operations like fetching data from an Express backend when a component mounts.

---

## 🚀 Why useEffect?

- 📡 Fetch data from a backend API
- 🧹 Clean up event listeners or timers
- 📦 Interact with localStorage or third-party libraries
- ⚙️ React to component lifecycle (mount/update/unmount)

---

## ⚙️ Syntax

```jsx
useEffect(() => {
  // Side effect logic here
}, [dependencies]);
```

- Runs after every render by default
- Runs only on mount with an empty dependency array `[]`
- Re-runs only when values in the dependency array change

---

## 📦 Example: Fetching Books on Mount

```jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
```

---

## 📁 Folder Structure

```bash
day-10-useEffect-react/
├── src/
│   ├── App.jsx
│   └── components/
│       └── Books.jsx
├── public/
│   └── index.html
├── README.md
└── package.json
```

---

## 📄 App.jsx

```jsx
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <Books />
    </div>
  );
}

export default App;
```

---

## ✅ Best Practices

- Always manage dependencies carefully in `useEffect`
- Use cleanup functions to avoid memory leaks
- Combine with custom hooks for reusability
- Handle errors and loading states gracefully

---

## 📦 Setup Instructions

```bash
npm install axios react react-dom
npm run dev
```

Ensure backend API is running at `http://localhost:5000/api/books`

---

## 🧠 Key Takeaways

- `useEffect` runs after rendering
- Add dependencies to control when it re-runs
- Use empty array `[]` for "on-mount" behavior
- Side effects are crucial for real-world interactivity

---

### 🔗 Learn more in my GitHub post with full explanation and file structure:

👉 GitHub: [kunalsahuji/my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts)  
📌 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)  
🎯 Keep Reacting with Hooks — it’s functional magic in MERN!

Part of my #100DaysOfMERN journey.  
Building in public, learning every day. 🚀

#100DaysOfMERN #MERN #ReactJS #useEffect #Hooks #JavaScript #Frontend #MERNStack #FullStackDeveloper #GitHubProjects #LinkedInDev #OpenToWork #CodeNewbie #APICalls #WebDevelopment #SoftwareEngineering
