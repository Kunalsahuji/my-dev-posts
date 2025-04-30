const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const bookRoutes = require('./routes/bookRoutes')

// Middleware
app.use(express.json())

// Routes
app.use('/api/books', bookRoutes)

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(`✅ MongoDB Connect`))
    .catch(err => console.log(`❌ Connection Error ${err}`))

// Server running
app.listen(process.env.PORT, () => {
    console.log(`✅ Server running on http:localhost:${process.env.PORT}`)
})