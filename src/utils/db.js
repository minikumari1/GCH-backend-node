const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://minikumari:V9qki0lMnW6jK4To@cluster0.4wp2a.mongodb.net/", {
            useNewUrlParser: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
