const Proposal = require('../models/proposal');

exports.createProposal = async (req, res) => {
    const proposal = new Proposal(req.body);
    try {
        const savedProposal = await proposal.save();
        res.status(201).json(savedProposal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getProposals = async (req, res) => {
    try {
        const proposals = await Proposal.find().populate('coordinator tasks');
        res.status(200).json(proposals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
