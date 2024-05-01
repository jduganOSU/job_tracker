import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Renders a component that allows the user to delete a contact from the network contacts list.
 */
function DeleteContact() {
    // Retrieves the current location object from the React Router.
    const location = useLocation();
    // Retrieves the navigate function from the React Router to programmatically navigate to a different route.
    const navigate = useNavigate();
    // Represents the loading state of the delete operation.
    const [loading, setLoading] = useState(false);

    /**
     * Handles the delete operation for a contact.
     * Sends a DELETE request to the server to delete the contact with the specified ID.
     * If the delete operation is successful, navigates to the '/networkContacts' route.
     * If an error occurs, logs the error and displays an alert to the user.
     */
    const handleDelete = async () => {
        try {
            setLoading(true);
            await axios.delete(`/api/networkContacts/${location.state.id}`);
            setLoading(false);
            navigate('/networkContacts');
        } catch (error) {
            console.error('Failed to delete contact:', error);
            alert('Failed to delete contact. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Delete Contact</h1>
            <p>Are you sure you want to delete this contact?</p>
            <button onClick={handleDelete} disabled={loading}>
                {loading ? 'Deleting...' : 'Delete Contact'}
            </button>
            <button onClick={() => navigate('/networkContacts')}>Cancel</button>
        </div>
    );
}

export default DeleteContact;