function apiCall() {
    fetch('http://localhost:5000/api/data')
        .then(res => res.json())
        .then(data => {
            console.log(`Data: ${data.message}`); // Check the data received
            document.getElementById('output').textContent = data.message; // Display the message in the output div
        })
}