const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan'); // For logging requests
const authRoutes = require('./routes/authRoutes');
const dbConnnection = require('./config/db');
const cookieParser = require('cookie-parser');
dbConnnection(); // Connect to MongoDB

app.use(cors());
app.use(morgan('tiny')); // Log requests to the console
app.use(cookieParser()); // Parse cookies from the request

app.use(express.json()); // Parse JSON request body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request body
app.use('/api/auth', authRoutes); // Use auth routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000; // Set the port to listen on
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
}); 