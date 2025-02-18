// routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Register route for new users
router.post('/register', authController.register);

// Login route
router.post('/login', authController.login);

module.exports = router;