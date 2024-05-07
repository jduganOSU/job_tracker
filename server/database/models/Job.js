const mongoose = require('mongoose');

/* This will be production Schema. For testing, we will not require
the company and skills to be mongoDB objects
const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
  postedDate: { type: Date, default: Date.now },
  status: { type: String, default: 'open' } // Example: open, closed, cancelled
});
*/
const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  skills: [{ type: String, required: true }],
  postedDate: { type: Date, default: Date.now },
  status: { type: String, default: 'open' } // Example: open, closed, cancelled
});
module.exports = mongoose.model('Job', JobSchema);
