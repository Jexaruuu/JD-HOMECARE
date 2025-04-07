// controllers/userController.js
const db = require('../db');

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
    const { firstName, lastName, mobile, email, password } = req.body;

    try {
        const query = password
            ? "UPDATE users SET firstName=?, lastName=?, mobile=?, email=?, password=? WHERE id=?"
            : "UPDATE users SET firstName=?, lastName=?, mobile=?, email=? WHERE id=?";
        
        const values = password
            ? [firstName, lastName, mobile, email, password, id]
            : [firstName, lastName, mobile, email, id];

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
