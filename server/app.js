const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const jobRoutes = require('./routes/jobs');
const companyRoutes = require('./routes/companies');

// Database
const connectDB = require('./database/db');

const app = express();

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());
app.use('/jobs', jobRoutes);
app.use('/company', companyRoutes);

// MongoDB connection
connectDB();

// Simple route to verify server is running
app.get('/', (req, res) => {
    res.send('API is running..');
});

const PORT = process.env.PORT || 5040;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); 
