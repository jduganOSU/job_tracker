const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  industry: { type: String },
  description: { type: String }
});

module.exports = mongoose.model('Company', CompanySchema);