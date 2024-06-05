const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const jobRoutes = require('./routes/jobs');
const companyRoutes = require('./routes/companies');
const userRoutes = require('./routes/users');
const skillRoutes = require('./routes/skills');
const contactRoutes = require('./routes/contacts'); // Import the contacts routes

// Database
const connectDB = require('./database/db');

const app = express();

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

// Routes
app.use('/jobs', jobRoutes);
app.use('/company', companyRoutes);
app.use('/user', userRoutes);
app.use('/skills', skillRoutes);
app.use('/contacts', contactRoutes); // Use the contacts routes

// MongoDB connection
connectDB();

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../front_end/build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../front_end', 'build', 'index.html'));
    });
  } else {
    app.get('/', (req, res) => {
      res.send('API is running..');
    });
  }
  
  const PORT = process.env.PORT || 5040;
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
