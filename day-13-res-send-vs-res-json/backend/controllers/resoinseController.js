// Controller using res.send()
const sendTextResponse = (req, res) => {
    res.send("Hello from res.send() \n res.send() sends a response of any type. It is a method of the response object of Express.js. It can send strings, buffers, or objects as a response to the client.")
}

// Controller using res.json()
const sendJsonResponse = (req, res) => {
    res.json({
        message: "Hello from res.json()",
        info: "res.json() sends a JSON response. It is a method of the response object of Express.js. It converts the JavaScript object into a JSON string and sends it as a response to the client.",
    })
}

module.exports = {
    sendTextResponse,
    sendJsonResponse
}