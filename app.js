const express = require('express');
const cors = require('cors'); // Import the CORS package
const connectDB = require('./src/utils/db');
const proposalRoutes = require('./src/routes/proposalRoutes');
const taskRoutes = require('./src/routes/taskRoutes');
const userRoutes = require('./src/routes/userRoutes');
const errorHandler = require('./src/utils/errorHandler');
require('dotenv').config();

const app = express();
app.use(express.json());

// Enable CORS with verbose logging
app.use(cors({
    origin: '*', // Allow all origins (customize as needed)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    preflightContinue: false,
    optionsSuccessStatus: 204, // Legacy browsers support
}));

// Connect to the database
connectDB();

// Define routes
app.use('/api/proposals', proposalRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

// Root endpointm
app.use("/", (req, res) => {
    res.send("Server Working");
});

// Error handler
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Log the server port
});
