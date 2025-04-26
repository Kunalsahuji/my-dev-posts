// This script fetches data from the backend API and displays it on the frontend.
// Ensure you have a server running at http://localhost:3000/api/hello
// and that you have the necessary HTML structure in place.
// HTML structure should include a button with id 'fetchData' and a div with id 'output'
// Example HTML structure:
// <button id="fetchData">Fetch Data</button>
// <div id="output"></div>  

// Fetch data from the backend API when the button is clicked

document.getElementById('fetchData').addEventListener('click', () => {
    fetch('http://localhost:3000/api/hello')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').textContent = data.message;
        })
        .catch(error => console.error('Error:', error));
});
