import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/**
 * Renders a list of network contacts.
 */
function ContactsList() {
    const navigate = useNavigate(); // React hook for navigation
    const [contacts, setContacts] = useState([]); // State variable to store contacts

    useEffect(() => {
        /**
         * Fetches the contacts from the server.
         */
        const fetchContacts = async () => {
            try {
                const response = await axios.get('/api/networkContacts'); // Sends a GET request to the server
                setContacts(response.data); // Updates the contacts state with the fetched data
            } catch (error) {
                console.error('Failed to fetch contacts:', error); // Logs an error message if fetching contacts fails
            }
        };

        fetchContacts(); // Calls the fetchContacts function when the component mounts
    }, []);

    /**
     * Handles the edit action for a contact.
     * @param {Object} contact - The contact object to be edited
     */
    const handleEdit = (contact) => {
        navigate('/networkContacts/edit', { state: { contact } }); // Navigates to the edit page with the contact data
    };

    /**
     * Handles the delete action for a contact.
     * @param {string} contactId - The ID of the contact to be deleted
     */
    const handleDelete = (contactId) => {
        navigate('/networkContacts/delete', { state: { id: contactId } }); // Navigates to the delete page with the contact ID
    };

    return (
        <div>
            <h1>Network Contacts</h1>
            <ul>
                {contacts.map(contact => (
                    <li key={contact._id}>
                        {contact.name} - {contact.email}
                        <button onClick={() => handleEdit(contact)}>Edit</button>
                        <button onClick={() => handleDelete(contact._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactsList;