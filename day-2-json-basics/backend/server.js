const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/data', (req, res) => {
    const data = {
        name: 'kunal',
        role: 'MERN Stack Developer',
        age: 25,
        stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    };
    res.json(data); // Send JSON response
})

app.post('/api/data', (req, res) => {
    const { name, age, role } = req.body; // Destructure the request body
    console.log(`Name: ${name}, Age: ${age}, Role: ${role}`); // Log the data to the console
    res.status(201).json({ message: 'Data received successfully!', data: { name, age, roll } }); // Send a success response
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/api/data`); // Log the server URL to the console 
})