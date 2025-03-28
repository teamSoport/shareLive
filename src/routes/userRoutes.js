const express = require('express');
const router = express.Router();
const { getUsers, createUser, registerUser } = require('../controllers/userController');

router.get('/', getUsers);
router.post('/', createUser);
router.post('/register', registerUser);

module.exports = router;
