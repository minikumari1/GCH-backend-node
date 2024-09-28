const Task = require('../models/task');

exports.createTask = async (req, res) => {
    const task = new Task(req.body);
    try {
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('proposal contributor');
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
