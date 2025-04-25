// 🔁 Convert JavaScript ↔ JSON
// 👉 Convert JavaScript Object to JSON

const user = { name: "kunal", age: 25, isActive: true };
const jsonData = JSON.stringify(user) // JSON.stringify() converts a JavaScript object to a JSON string
console.log(jsonData); // {"name":"kunal","age":25,"isActive":true}
console.log(typeof jsonData); // string

// 👈 Convert JSON to JavaScript Object

const jsonStr = `{"name":"kunal", "age":25, "isActive":true}`;
const userObj = JSON.parse(jsonStr) // JSON.parse() converts a JSON string to a JavaScript object
console.log(userObj); // { name: 'kunal', age: 25, isActive: true }
console.log(typeof userObj); // object