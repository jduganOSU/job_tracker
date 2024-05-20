const express = require('express');
const skillsService = require('../database/services/skillsService'); 
const { authenticateToken } = require('../helpers'); // make sure this path is correct


const router = express.Router();

// Endpoint to create a new skill
router.post('/', authenticateToken, async (req, res) => {
  try {
    // Include user ID in the job data or use it otherwise
    const skillData = {
      ...req.body,
      userId: req.user.userId // Assuming the token decoding adds a userId
    };
    const skill = await skillsService.createSkill(skillData);
    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to retrieve all skills
router.get('/', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const skills = await skillsService.getAllSkillsForUser(userId);
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to retrieve a skill by ID
router.get('/:id', async (req, res) => {
  try {
    const skill = await skillsService.getSkillById(req.params.id);
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
    const updatedSkill = await skillsService.updateSkill(req.params.id, req.body);
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
    await skillsService.deleteSkill(req.params.id);
    res.status(200).json({ message: 'Skill deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
