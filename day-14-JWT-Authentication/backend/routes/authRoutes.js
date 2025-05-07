const express = require('express');
const router = express.Router();
const { regsiterUser, loginUser, logoutUser, getUserProfile, updateUserProfile, deleteUserProfile, getAllUsers } = require('../controller/authController');
const protect = require('../middleware/authMiddleware');

router.post('/register', regsiterUser);
router.post('/login', loginUser);
router.get('/allusers', getAllUsers);
router.get('/logout', protect, logoutUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.delete('/profile', protect, deleteUserProfile);

module.exports = router;