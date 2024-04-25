const express = require('express');
const skillsService = require('../services/skillsService'); 

const router = express.Router();

// Endpoint to create a new skill
router.post('/', async (req, res) => {
  try {
    const skill = await skillService.createSkill(req.body);
    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to retrieve all skills
router.get('/', async (req, res) => {
  try {
    const skills = await skillService.getAllSkills();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to retrieve a skill by ID
router.get('/:id', async (req, res) => {
  try {
    const skill = await skillService.getSkillById(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to update a skill
router.put('/:id', async (req, res) => {
  try {
    const updatedSkill = await skillService.updateSkill(req.params.id, req.body);
    if (!updatedSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.status(200).json(updatedSkill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to delete a skill
router.delete('/:id', async (req, res) => {
  try {
    await skillService.deleteSkill(req.params.id);
    res.status(200).json({ message: 'Skill deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
