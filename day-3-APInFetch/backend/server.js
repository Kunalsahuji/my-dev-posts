const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());

// Simple API Route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from backend server!' });
});

// Server Start
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
