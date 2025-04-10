// controllers/userController.js
const db = require('../db');
const bcrypt = require("bcrypt"); // added for hashing passwords

// Get user by ID
exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
        if (rows.length === 0) return res.status(404).json({ message: "User not found" });
        res.json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Database error" });
    }
};

// Update user by ID
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, mobile, email, password } = req.body;

    try {
let query;
let values;

if (password) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    query = "UPDATE users SET first_name=?, last_name=?, mobile=?, email=?, password=? WHERE id=?";
    values = [first_name, last_name, mobile, email, hashedPassword, id];
} else {
    query = "UPDATE users SET first_name=?, last_name=?, mobile=?, email=? WHERE id=?";
    values = [first_name, last_name, mobile, email, id];
}

await db.query(query, values);
res.json({ message: "User updated successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating user" });
    }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query("DELETE FROM users WHERE id = ?", [id]);
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error deleting user" });
    }
};
