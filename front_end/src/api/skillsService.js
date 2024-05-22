const API_BASE_URL = 'http://localhost:5040'; // Change this to the URL of your backend

export const createSkill = async (skillData) => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${API_BASE_URL}/skills`, { // Ensure the endpoint matches your backend route
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(skillData)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // This will return the skill data from the backend if successful
  } catch (error) {
    console.error('Failed to create skill:', error);
    throw error; // Re-throw the error if you want to handle it in the component
  }
};

export const getAllSkills = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${API_BASE_URL}/skills`, { // Ensure the endpoint matches your backend route
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // This will return the skill data from the backend if successful
  } catch (error) {
    console.error('Failed to retrieve skills:', error);
    throw error; // Re-throw the error if you want to handle it in the component
  }
};

export const deleteSkill = async (skillId) => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${API_BASE_URL}/skills/${skillId}`, { // Ensure the endpoint matches your backend route
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // This will return the confirmation message from the backend if successful
  } catch (error) {
    console.error('Failed to delete skill:', error);
    throw error; // Re-throw the error if you want to handle it in the component
  }
};
