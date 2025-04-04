const express = require('express');
const session = require('express-session');
const cors = require('cors');
const db = require('./db'); 
const signupRoutes = require('./routes/signupRoutes'); 
const loginRoutes = require('./routes/loginRoutes'); 
const logoutRoutes = require('./routes/logoutRoutes'); // Add logout route

const app = express();

app.use(cors({
    origin: "http://localhost:5173", // Adjust based on your frontend URL
    credentials: true // Allow cookies
}));
app.use(express.json());

// Add session middleware
app.use(session({
    secret: 'your_secret_key', // Change this to a strong secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

app.use('/api', signupRoutes);
app.use('/api', loginRoutes);
app.use('/api', logoutRoutes); // Use logout routes

app.get('/', (req, res) => {
    res.send('Hello, backend is working!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

