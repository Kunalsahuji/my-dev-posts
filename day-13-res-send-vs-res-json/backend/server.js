const express = require('express');
const app = express()
const responseRoutes = require('./routes/responseRoutes');
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next(); // Call the next middleware or route handler
});

// Use the response routes
app.use('/api', responseRoutes);

//Root
app.get('/', (req, res) => {
    res.send('Welcome to the Express.js server! Use /api/send for text response and /api/json for JSON response.');
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


