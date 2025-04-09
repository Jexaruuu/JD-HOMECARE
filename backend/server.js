const express = require('express');
const session = require('express-session');
const cors = require('cors');
const db = require('./db'); 
const signupRoutes = require('./routes/signupRoutes'); 
const loginRoutes = require('./routes/loginRoutes'); 
const logoutRoutes = require('./routes/logoutRoutes'); 
const userRoutes = require('./routes/userRoutes');



const app = express();

app.use(cors({
    origin: "*",
    credentials: true 
}));
app.use(express.json());


app.use(session({
    secret: 'your_secret_key', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

app.use('/api', signupRoutes);
app.use('/api', loginRoutes);
app.use('/api', logoutRoutes); 
app.use('/api', userRoutes);



app.get('/', (req, res) => {
    res.send('Hello, backend is working!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

