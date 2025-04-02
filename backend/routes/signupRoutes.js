// signupRoutes.js
const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/signupController'); // Import the signup controller

// POST route for signing up a user
router.post('/signup', signup);

module.exports = router;
