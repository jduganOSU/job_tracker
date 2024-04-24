const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String }
});

module.exports = mongoose.model('Skill', SkillSchema);
