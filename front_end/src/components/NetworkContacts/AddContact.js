import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/**
 * Renders a form to add a new contact.
 * 
 * @returns {JSX.Element} The AddContact component.
 */
function AddContact() {
    const navigate = useNavigate(); // React hook for navigation
    const [contact, setContact] = useState({ name: '', email: '', company: '' }); // State for contact form fields

    /**
     * Handles the form submission.
     * 
     * @param {Event} event - The form submission event.
     */
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        try {
            await axios.post('/api/networkContacts', contact); // Sends a POST request to add the contact
            navigate('/networkContacts'); // Navigates to the network contacts page
        } catch (error) {
            console.error(error); // Logs any errors
            alert('Failed to add contact. Please try again.'); // Displays an error message
        }
    };

    return (
        <div>
            <h1>Add Contact</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={contact.name}
                    onChange={e => setContact({ ...contact, name: e.target.value })} // Updates the name field in the contact state
                />
                <label>Email:</label>
                <input
                    type="email"
                    value={contact.email}
                    onChange={e => setContact({ ...contact, email: e.target.value })} // Updates the email field in the contact state
                />
                <label>Company:</label>
                <input
                    type="text"
                    value={contact.company}
                    onChange={e => setContact({ ...contact, company: e.target.value })} // Updates the company field in the contact state
                />
                <button type="submit">Add Contact</button>
            </form>
        </div>
    );
}

export default AddContact;
