# Day 16 – Introduction to React Context API

🗓️ Date: 2025-05-10  
👨‍💻 Author: Kunal Sahuji  
🏷️ Tags: MERN, React, ContextAPI, StateManagement, FrontendDevelopment, FullStackDeveloper, CleanCode, GitHubProjects, OpenToWork, LinkedInDev

🔗 GitHub: [my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-16-context-api)  
🔗 LinkedIn: [linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)  
🔗 Notion: [Watch my content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)

---

## 📌 Introduction

The React Context API provides a way to pass data through the component tree without having to pass props down manually at every level. It's ideal for sharing global data like themes, user information, or settings.

---

## 🔍 Why Use Context API?

- **Avoid Prop Drilling**: Pass data directly to deeply nested components.
- **Global State Management**: Manage state that's needed across multiple components.
- **Cleaner Code**: Reduce the need for intermediate components solely for passing props.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Kunalsahuji/my-dev-posts.git
cd my-dev-posts/day-16-context-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm start
```

---

## 📁 Folder Structure

```bash
day-16-context-api/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Profile.jsx
│   ├── context/
│   │   └── UserContext.js
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── public/
│   └── index.html
├── package.json
└── README.md
```

---

## 📄 Code Files

### `src/context/UserContext.js`

```javascript
import { createContext } from 'react';

const UserContext = createContext(null);

export default UserContext;
```

---

### `src/components/Header.jsx`

```jsx
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Header = () => {
  const user = useContext(UserContext);

  return (
    <header>
      <h1>Welcome, {user.name}!</h1>
    </header>
  );
};

export default Header;
```

---

### `src/components/Profile.jsx`

```jsx
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Profile Information:</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default Profile;
```

---

### `src/App.jsx`

```jsx
import React from 'react';
import UserContext from './context/UserContext';
import Header from './components/Header';
import Profile from './components/Profile';

const App = () => {
  const user = {
    name: 'Kunal Sahuji',
    email: 'kunal@example.com',
  };

  return (
    <UserContext.Provider value={user}>
      <div>
        <Header />
        <Profile />
      </div>
    </UserContext.Provider>
  );
};

export default App;
```

---

### `src/index.js`

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
```

---

### `src/index.css`

```css
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}
```

---

## 📌 LinkedIn Post Content

🚀 **Day 16 – Introduction to React Context API** 🚀

Today, I explored the React Context API, a powerful feature that allows for efficient state management across components without the need for prop drilling.

🔍 **Why Use Context API?**
- Simplifies state management by providing a global state.
- Eliminates the need to pass props through intermediate components.
- Enhances code readability and maintainability.

💡 In my example, I created a user context to share user information across the Header and Profile components seamlessly.

Check out the full code and explanation on my GitHub: [my-dev-posts](https://github.com/Kunalsahuji/my-dev-posts/tree/main/day-16-context-api)

Let's continue building and learning! 💪

#100DaysOfMERN #React #ContextAPI #JavaScript #WebDevelopment #FrontendDevelopment #CleanCode #OpenToWork #LinkedInDev
