console.log("Server is running...");
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const userRoutes = require("./routes/userRoutes");
// Middleware
app.use(express.json()); // Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies (as sent by HTML forms)

// Routes
app.use('/api', userRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});