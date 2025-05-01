exports.createUser = (req, res, next) => {
    const { name, email } = req.body

    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" })
    }


    // Simulate DB operation
    const newUser = {
        id: Date.now(), // Simulate a unique ID
        name,
        email
    }
    res.status(201).json(
        {
            message: "User created successfully",
            user: newUser
        }
    )
}