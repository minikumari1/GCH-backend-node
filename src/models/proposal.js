const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
    title: String,
    description: String,
    coordinator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
});

module.exports = mongoose.model('Proposal', proposalSchema);
