const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../middleware/auth');

router.post('/', auth('Proposal Coordinator'), taskController.createTask);
router.get('/', auth(), taskController.getTasks);

module.exports = router;
