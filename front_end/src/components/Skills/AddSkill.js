import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddSkill() {
    const navigate = useNavigate();
    const [skill, setSkill] = useState({ name: '', description: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/api/skills', skill);
            navigate('/skills');
        } catch (error) {
            console.error('Failed to add skill:', error);
            alert('Failed to add skill. Please try again.');
        }
    };

    return (
        <div>
            <h1>Add Skill</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={skill.name}
                    onChange={e => setSkill({ ...skill, name: e.target.value })}
                />
                <label>Description:</label>
                <input
                    type="text"
                    value={skill.description}
                    onChange={e => setSkill({ ...skill, description: e.target.value })}
                />
                <button type="submit">Add Skill</button>
            </form>
        </div>
    );
}

export default AddSkill;
