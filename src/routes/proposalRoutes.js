const express = require('express');
const router = express.Router();
const proposalController = require('../controllers/proposalController');
const auth = require('../middleware/auth');

router.post('/', auth('Proposal Coordinator'), proposalController.createProposal);
router.get('/', auth(), proposalController.getProposals);

module.exports = router;
