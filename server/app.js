const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
console.log(process.env.MONGO_URI);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected successfully!'))
.catch(err => console.error('MongoDB connection failed: ', err));


// Simple route to verify server is running
app.get('/', (req, res) => {
    res.send('API is running..');
});

const PORT = process.env.PORT || 5040;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); 
