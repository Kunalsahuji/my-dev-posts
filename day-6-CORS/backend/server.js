const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: 'CORS is working!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});