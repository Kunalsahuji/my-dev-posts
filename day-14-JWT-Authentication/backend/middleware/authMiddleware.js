// auth middleware
const jwt = require('jsonwebtoken');
const User = require('../models/authModel');

const protect = async (req, res, next) => {
    let token;
    console.log('req.cookies:', req.cookies.jwt);
    console.log('req.headers:', req.headers);
    // Check if the token is in the cookies or in the authorization header
    if (req.cookies.jwt) {
        token = req.cookies.jwt;
    } else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next(); 
    } catch (error) {
        return res.status(401).json({ message: 'Not authorized, token failed' });
    }
};

module.exports = protect;