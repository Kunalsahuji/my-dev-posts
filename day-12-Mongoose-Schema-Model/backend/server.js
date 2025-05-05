const express = require('express')
const app = express()
require('dotenv').config()
const { dbConnection } = require('./models/dbConnect')
const bookRoutes = require('./routes/bookRoutes')

// Middleware
app.use(express.json())

// Routes
app.use('/api/books', bookRoutes)

// Server running
app.listen(process.env.PORT, () => {
    console.log(`✅ Server running on http:localhost:${process.env.PORT}`)
})