const API_BASE_URL = 'http://localhost:5040'; // Adjust as per your backend configuration

export const addSkill = async (skillData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/skills`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(skillData)
        });
        if (!response.ok) {
            throw new Error('Failed to add skill');
        }
        return response.json();
    } catch (error) {
        console.error('Failed to add skill:', error);
        throw error;
    }
};

export const getSkills = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/skills`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch skills');
        }
        return response.json();
    } catch (error) {
        console.error('Failed to fetch skills:', error);
        throw error;
    }
};

export const updateSkill = async (skillId, skillData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/skills/${skillId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(skillData)
        });
        if (!response.ok) {
            throw new Error('Failed to update skill');
        }
        return response.json();
    } catch (error) {
        console.error('Failed to update skill:', error);
        throw error;
    }
};

export const deleteSkill = async (skillId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/skills/${skillId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error('Failed to delete skill');
        }
        return response.json();
    } catch (error) {
        console.error('Failed to delete skill:', error);
        throw error;
    }
};
