import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function DeleteSkill() {
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        try {
            setLoading(true);
            await axios.delete(`/api/skills/${location.state.id}`);
            setLoading(false);
            navigate('/skills');
        } catch (error) {
            console.error('Failed to delete skill:', error);
            alert('Failed to delete skill. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Delete Skill</h1>
            <p>Are you sure you want to delete this skill?</p>
            <button onClick={handleDelete} disabled={loading}>
                {loading ? 'Deleting...' : 'Delete Skill'}
            </button>
            <button onClick={() => navigate('/skills')}>Cancel</button>
        </div>
    );
}

export default DeleteSkill;