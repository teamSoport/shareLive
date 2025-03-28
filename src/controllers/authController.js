const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = (req, res) => {
    const { username, password } = req.body;

    // Replace this with your actual user validation logic
    if (username === 'admin' && password === 'password') {
        const user = { username };
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });
    }

    res.status(401).json({ message: 'Invalid credentials' });
};

module.exports = { login };
