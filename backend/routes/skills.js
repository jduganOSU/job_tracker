const express = require('express');
const router = express.Router();

// Mock data for illustration
let skillsData = [
  { SkillsID: '1', Name: 'JavaScript', Description: 'Programming language' },
  // Add more skills
];

// POST endpoint to create a new skill
router.post('/', (req, res) => {
  const { name, description } = req.body;
  const newSkill = {
    SkillsID: String(skillsData.length + 1), // Just for example; normally you'd use a database auto-increment
    Name: name,
    Description: description,
  };
  skillsData.push(newSkill);
  res.json(newSkill);
});

// GET endpoint to retrieve all skills
router.get('/', (req, res) => {
  res.json(skillsData);
});

// PUT endpoint to update a skill
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const skillIndex = skillsData.findIndex(skill => skill.SkillsID === id);
  if (skillIndex !== -1) {
    skillsData[skillIndex] = { ...skillsData[skillIndex], Name: name, Description: description };
    res.json(skillsData[skillIndex]);
  } else {
    res.status(404).send('Skill not found');
  }
});

// DELETE endpoint to delete a skill
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const newSkillsData = skillsData.filter(skill => skill.SkillsID !== id);
  if (newSkillsData.length !== skillsData.length) {
    skillsData = newSkillsData;
    res.send('Skill deleted successfully');
  } else {
    res.status(404).send('Skill not found');
  }
});

module.exports = router;
