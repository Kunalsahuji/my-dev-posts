import React from 'react';

function App() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  console.log(`API URL: ${apiUrl}`); // Log the API URL to the console
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🟢 Day 5 - Environment Variables in Vite + React</h1>
      <p>API URL fetched from .env: </p>
      <strong>{apiUrl}</strong>
    </div>
  );
}

export default App;
