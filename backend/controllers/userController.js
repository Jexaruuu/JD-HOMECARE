const db = require("../db"); // Assuming db.js is correctly set up for MySQL

// Get user by ID
exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

// Update user
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, mobile, email, password } = req.body;

    try {
        const [result] = await db.query(
            "UPDATE users SET first_name = ?, last_name = ?, mobile = ?, email = ?, password = ? WHERE id = ?",
            [first_name, last_name, mobile, email, password || null, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "Profile updated successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

// Delete user
exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    // Ensure the user is logged in (example with session-based)
    if (!req.session.userId || req.session.userId !== id) {
        return res.status(403).json({ message: "Not authorized to delete this account" });
    }

    try {
        await db.query("DELETE FROM users WHERE id = ?", [id]);
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error deleting user" });
    }
};
