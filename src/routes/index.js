const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');

// Example route
router.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Auth routes
router.use('/auth', authRoutes);

// User routes
router.use('/users', userRoutes);

module.exports = router;
