import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function EditSkill() {
    const location = useLocation();
    const navigate = useNavigate();
    const [skill, setSkill] = useState(location.state.skill);

    useEffect(() => {
        if (!skill) navigate('/skills');
    }, [skill, navigate]);

    const handleEdit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`/api/skills/${skill._id}`, skill);
            navigate('/skills');
        } catch (error) {
            console.error('Failed to update skill:', error);
            alert('Failed to update skill. Please try again.');
        }
    };

    return (
        <div>
            <h1>Edit Skill</h1>
            <form onSubmit={handleEdit}>
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
                <button type="submit">Update Skill</button>
            </form>
        </div>
    );
}

export default EditSkill;