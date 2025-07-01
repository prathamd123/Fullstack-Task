const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/adminController');

router.post('/register', register); // For initial setup only
router.post('/login', login);

module.exports = router; 