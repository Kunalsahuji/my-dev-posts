const mongoose = require('mongoose')
const dbConnnection = mongoose.connect(process.env.MONGO_URI)
    .then((result) => {
        console.log("Database Connected Successfully!✅")
    })
    .catch((err) => {
        console.error(err);
    });

module.exports = dbConnnection 
