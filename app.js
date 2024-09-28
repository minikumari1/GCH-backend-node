const express = require('express');
const connectDB = require('./src/utils/db');
const proposalRoutes = require('./src/routes/proposalRoutes');
const taskRoutes = require('./src/routes/taskRoutes');
const userRoutes = require('./src/routes/userRoutes');
const errorHandler = require('./src/utils/errorHandler');
require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

app.use('/api/proposals', proposalRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port from app js file ${PORT}`));
