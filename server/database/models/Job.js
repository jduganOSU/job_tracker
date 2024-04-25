const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
  postedDate: { type: Date, default: Date.now },
  status: { type: String, default: 'open' } // Example: open, closed, cancelled
});

module.exports = mongoose.model('Job', JobSchema);
