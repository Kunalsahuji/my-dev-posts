const User = require('../models/authModel');
const generateToken = require('../utils/generateToken');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env; 
exports.regsiterUser = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please fill all the fields' });
    }
    const userExistes = await User.findOne({ email });
    if (userExistes) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const user = await User.create({
        name,
        email,
        password,
    });
    if (user) {
        console.log(`User created successfully: ${req.cookies}`);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    }
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (user && (await user.comparePassword(password))) {
        // Set the JWT token in a cookie
        res.cookie('jwt', generateToken(user._id), {
            httpOnly: true, // Prevents client-side JavaScript from accessing the cookie

            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie expiration time (30 days)
        });
        console.log(`User logged in successfully: ${req.cookies.jwt}`);
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(401).json({ message: 'Invalid email or password' })
    }

}

exports.logoutUser = async (req, res) => {
    res.clearCookie('jwt'); // Clear the cookie
    res.status(200).json({ message: 'Logged out successfully' });
}
exports.getUserProfile = async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}
exports.updateUserProfile = async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = req.body.password;
        }
        const updatedUser = await user.save();
        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            token: generateToken(updatedUser._id),
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}
exports.deleteUserProfile = async (req, res) => {
    const user = await User.findByIdAndDelete(req.user._id);
    if (user) {
        res.status(200).json({ message: 'User deleted successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
}

exports.getAllUsers = async (req, res) => {
    const users = await User.find().select('-password'); // Exclude password field
    res.status(200).json(users);
}
