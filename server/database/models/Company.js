const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  industry: { type: String },
  description: { type: String }, 
  location: {type: String},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Reference to User model
});

CompanySchema.index({ userId: 1 });
module.exports = mongoose.model('Company', CompanySchema);
