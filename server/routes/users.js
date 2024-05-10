const express = require('express');
const jwt = require('jsonwebtoken');
const service = require('../database/services/userService'); 

const router = express.Router();

// Endpoint to create a new user
router.post('/', async (req, res) => {
  try {
    const user = await service.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to retrieve all users
router.get('/', async (req, res) => {
  try {
    const users = await service.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to retrieve a users by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await service.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to update a users
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await service.updateUser(req.params.id, req.body);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to delete a users
router.delete('/:id', async (req, res) => {
  try {
    await service.deleteUser(req.params.id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await service.authenticateUser(email, password); // This should be a service that checks the user credentials
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Assuming the authentication is successful, generate a JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email }, // Payload
      process.env.JWT_SECRET, // Secret key
      { expiresIn: '4h' } // Options, token will expire in 1 hour
    );

    res.json({
      message: 'Login successful',
      token: token,
      username: user.username // Send the username to confirm it's working
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
