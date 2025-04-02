// db.js

const mysql = require('mysql2');

// Create a connection to the database
const pool = mysql.createPool({
  host: 'localhost',      // Change to your MySQL host
  user: 'root',           // Change to your MySQL username
  password: '',   // Change to your MySQL password
  database: 'db_thesis' // Change to your database name
});

// Export the pool
module.exports = pool.promise(); // .promise() returns a promise-based API
