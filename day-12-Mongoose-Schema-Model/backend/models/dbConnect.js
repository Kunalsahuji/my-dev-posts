const mongoose = require('mongoose');
// MongoDB Connection
exports.dbConnection = mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(`✅ MongoDB Connect`))
    .catch(err => console.log(`❌ Connection Error ${err}`))