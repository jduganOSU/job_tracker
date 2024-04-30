const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  email: { type: String, required: true },
  phone: { type: String },
  contactID: { type: String, required: true, unique: true },
  addedDate: { type: Date, default: Date.now },
  notes: { type: String }
});

module.exports = mongoose.model('Contact', ContactSchema);
