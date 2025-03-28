const { createUser, getUserByEmail } = require('../models/userModel');

const getUsers = (req, res) => {
    res.json({ message: 'Get all users' });
};

const createUserHandler = (req, res) => {
    const { name, email } = req.body;
    res.json({ message: `User ${name} created with email ${email}` });
};

const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    if (!['superadmin', 'admin', 'respondent'].includes(role)) {
        return res.status(400).json({ message: 'Invalid role' });
    }

    try {
        const userId = await createUser(name, email, password, role);
        res.status(201).json({ message: 'User created', userId });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

module.exports = { getUsers, createUserHandler, registerUser };
