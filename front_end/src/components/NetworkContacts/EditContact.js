import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function EditContact() {
    const location = useLocation();
    const navigate = useNavigate();
    const [contact, setContact] = useState(location.state.contact);

    useEffect(() => {
        if (!contact) navigate('/networkContacts');
    }, [contact, navigate]);

    const handleEdit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`/api/networkContacts/${contact._id}`, contact);
            navigate('/networkContacts');
        } catch (error) {
            console.error('Failed to update contact:', error);
            alert('Failed to update contact. Please try again.');
        }
    };

    return (
        <div>
            <h1>Edit Contact</h1>
            <form onSubmit={handleEdit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={contact.name}
                    onChange={e => setContact({ ...contact, name: e.target.value })}
                />
                <label>Email:</label>
                <input
                    type="email"
                    value={contact.email}
                    onChange={e => setContact({ ...contact, email: e.target.value })}
                />
                <button type="submit">Update Contact</button>
            </form>
        </div>
    );
}

export default EditContact;