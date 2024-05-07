const API_BASE_URL = 'http://localhost:5040'; // Change this to match your backend's URL

export const addContact = async (contactData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/networkContacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData)
        });
        if (!response.ok) {
            throw new Error('Failed to add contact');
        }
        return response.json();
    } catch (error) {
        console.error('Failed to add contact:', error);
        throw error;
    }
};

export const getContacts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/networkContacts`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch contacts');
        }
        return response.json();
    } catch (error) {
        console.error('Failed to fetch contacts:', error);
        throw error;
    }
};

export const updateContact = async (contactId, contactData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/networkContacts/${contactId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData)
        });
        if (!response.ok) {
            throw new Error('Failed to update contact');
        }
        return response.json();
    } catch (error) {
        console.error('Failed to update contact:', error);
        throw error;
    }
};

export const deleteContact = async (contactId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/networkContacts/${contactId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error('Failed to delete contact');
        }
        return response.json();
    } catch (error) {
        console.error('Failed to delete contact:', error);
        throw error;
    }
};
