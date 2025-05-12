const express = require('express');
require('dotenv').config();
const itemRoutes = require('./routes/itemRoutes');
const dbConnnection = require('./utils/dbConnection')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/api/items', itemRoutes);


app.listen(5000, () => console.log('Server running on port 5000'));
