const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Database
const connectDB = require('./database/db');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection
connectDB();

// Simple route to verify server is running
app.get('/', (req, res) => {
    res.send('API is running..');
});

const PORT = process.env.PORT || 5040;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); 
