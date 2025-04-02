const express = require('express');
const cors = require('cors');
const db = require('./db'); 
const signupRoutes = require('./routes/signupRoutes'); 
const loginRoutes = require('./routes/loginRoutes'); 

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', signupRoutes);
app.use('/api', loginRoutes); // Add login routes

app.get('/', (req, res) => {
    res.send('Hello, backend is working!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
