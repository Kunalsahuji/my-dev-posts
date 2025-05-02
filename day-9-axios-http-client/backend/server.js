const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const bookRoutes = require('./routes/bookRoutes');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/books', bookRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
