import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SkillsList() {
    const navigate = useNavigate();
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await axios.get('/api/skills');
                setSkills(response.data);
            } catch (error) {
                console.error('Failed to fetch skills:', error);
            }
        };

        fetchSkills();
    }, []);

    const handleEdit = (skill) => {
        navigate('/skills/edit', { state: { skill } });
    };

    const handleDelete = (skillId) => {
        navigate('/skills/delete', { state: { id: skillId } });
    };

    return (
        <div>
            <h1>Skills</h1>
            <ul>
                {skills.map(skill => (
                    <li key={skill._id}>
                        {skill.name} - {skill.description}
                        <button onClick={() => handleEdit(skill)}>Edit</button>
                        <button onClick={() => handleDelete(skill._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SkillsList;