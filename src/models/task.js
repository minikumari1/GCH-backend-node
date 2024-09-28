const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    skillsRequired: [String],
    domainKnowledge: String,
    timeline: Date,
    proposal: { type: mongoose.Schema.Types.ObjectId, ref: 'Proposal' },
    contributor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['Pending', 'Accepted', 'Completed'], default: 'Pending' },
});

module.exports = mongoose.model('Task', taskSchema);
