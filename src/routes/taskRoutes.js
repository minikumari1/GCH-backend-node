const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../middleware/auth');

router.post('/creatTask', auth('coordinator'), taskController.createTask);
router.get('/getTask', auth('coordinator'), taskController.getTasks);

module.exports = router;
