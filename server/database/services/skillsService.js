const Skill = require('../models/Skill');

const skillService = {
    createSkill: async function(skillData) {
        const skill = new Skill(skillData);
        return await skill.save();
    },

    getAllSkillsForUser: async function(userId) {
        return await Skill.find({ userId: userId });
    },

    getSkillById: async function(id) {
        return await Skill.findById(id);
    },

    updateSkill: async function(id, skillData) {
        return await Skill.findByIdAndUpdate(id, skillData, { new: true });
    },

    deleteSkill: async function(id) {
        return await Skill.findByIdAndDelete(id);
    }
};

module.exports = skillService;
