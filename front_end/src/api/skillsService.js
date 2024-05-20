import axios from 'axios';

const API_BASE_URL = 'http://localhost:5040'; // Change this to the URL of your backend
const token = localStorage.getItem('token'); // Ensure you have a token stored or handled appropriately

// Setup axios instance for repeated use
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
});

export const createSkill = async (skillData) => {
  try {
    const response = await api.post('/skills', skillData);
    return response.data;
  } catch (error) {
    console.error('Failed to create skill:', error);
    throw error;
  }
};

export const getAllSkills = async () => {
  try {
    const response = await api.get('/skills');
    return response.data;
  } catch (error) {
    console.error('Failed to retrieve skills:', error);
    throw error;
  }
};

export const getSkillById = async (skillId) => {
  try {
    const response = await api.get(`/skills/${skillId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to retrieve skill:', error);
    throw error;
  }
};

export const updateSkill = async (skillId, skillData) => {
  try {
    const response = await api.put(`/skills/${skillId}`, skillData);
    return response.data;
  } catch (error) {
    console.error('Failed to update skill:', error);
    throw error;
  }
};

export const deleteSkill = async (skillId) => {
  try {
    const response = await api.delete(`/skills/${skillId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete skill:', error);
    throw error;
  }
};
