const User = require('../models/User');

const userService = {
  // Create a new user
  createUser: async function(userData) {
    const user = new User(userData);
    return await user.save();
  },

  // Get all users
  getAllUsers: async function() {
    return await User.find();
  },

  // Get a single user by ID
  getUserById: async function(id) {
    return await User.findById(id);
  },

  // Update a user by ID
  updateUser: async function(id, userData) {
    return await User.findByIdAndUpdate(id, userData, { new: true });
  },

  // Delete a user by ID
  deleteUser: async function(id) {
    return await User.findByIdAndDelete(id);
  }
};

module.exports = userService;
