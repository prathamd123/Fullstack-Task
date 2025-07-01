const express = require('express');
const router = express.Router();
const { getProjects, createProject } = require('../controllers/projectController');
const auth = require('../middleware/auth');

router.get('/', getProjects);
router.post('/', auth, createProject);

module.exports = router;