fetch('http://localhost:3000/api/data')
    .then(res => res.json())
    .then(data => {
        console.log("Received from server:", data);
    });
// Received from server: {
//   name: 'kunal',
//   role: 'MERN Stack Developer',
//   age: 25,
//   stack: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Node.js',
//     'Express',
//     'MongoDB'
//   ]
// }
