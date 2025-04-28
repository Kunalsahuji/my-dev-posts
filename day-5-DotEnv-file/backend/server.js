// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());

// app.get('/api/hello', (req, res) => {
//     res.json({ message: 'Hello from the server!' });
// });

// app.listen(PORT, () => {
//     console.log(`✅ Server running on port ${PORT}`);
// });
// // This code is a simple Express server that serves an API endpoint. It uses the dotenv package to load environment variables from a .env file, allowing for easy configuration of the server's port and other settings. The server listens on a specified port (defaulting to 3000) and responds to GET requests made to the /api/hello endpoint with a JSON object containing a message. The cors package is used to enable Cross-Origin Resource Sharing, allowing the server to accept requests from different origins. The server logs a message to the console when it starts successfully.

require('dotenv').config();
const express = require('express');
const app = express();

// Summoning the secret values
const PORT = process.env.PORT || 3000;
app.get('/api', (req, res) => {
    res.send('Environment Variables are awesome!');
});

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
