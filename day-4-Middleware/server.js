const express = require('express');
const app = express();
const PORT = 3000; // Define the port number
//Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next(); // Pass control to the next middleware or route handler
};

app.use(logger); // Register the logger middleware

// Middleware to parse JSON request body
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Middleware to serve static files from the "public" directory
//app.use(express.static('public'));

//route to handle GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello Middleware!')
});

//Error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res.status(500).json({ error: 'Something went wrong!' }); // Send a JSON response with the error message
    //next(); // Pass control to the next middleware (if any)
}
app.use(errorHandler); // Register the error handling middleware

// Start the server on port 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
