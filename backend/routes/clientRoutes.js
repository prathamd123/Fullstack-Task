const express = require('express');
const router = express.Router();
const { getClients, createClient } = require('../controllers/clientController');
const auth = require('../middleware/auth');

router.get('/', getClients);
router.post('/', auth, createClient);

module.exports = router;