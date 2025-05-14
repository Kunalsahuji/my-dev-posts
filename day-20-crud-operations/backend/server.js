const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
require('dotenv').config()
const dbConnection = require('./utils/db')

const itemRoutes = require('./routes/taskRoutes');

const app = express();
app.use(morgan('tiny'))
app.use(cors());
app.use(express.json());

app.use('/api', itemRoutes);


app.listen(process.env.PORT, () => {
  console.log('Server running on port 5000');
});

