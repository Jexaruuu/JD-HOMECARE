// server.js

const express = require('express');
const cors = require('cors');
const db = require('./db'); // Import the database connection
const signupRoutes = require('./routes/signupRoutes'); // Import the signup routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // To parse JSON bodies

// Use signup routes
app.use('/api', signupRoutes); // All signup routes will be under /api

// Example route to test the connection
app.get('/', (req, res) => {
  res.send('Hello, backend is working!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
