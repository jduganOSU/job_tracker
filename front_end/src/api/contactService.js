const API_BASE_URL = 'http://localhost:5040'; // Change this to the URL of your backend

export const createContact = async (contactData) => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${API_BASE_URL}/contacts`, { // Ensure the endpoint matches your backend route
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(contactData)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // This will return the contact data from the backend if successful
  } catch (error) {
    console.error('Failed to create contact:', error);
    throw error; // Re-throw the error if you want to handle it in the component
  }
};

export const getAllContacts = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${API_BASE_URL}/contacts`, { // Ensure the endpoint matches your backend route
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // This will return the contact data from the backend if successful
  } catch (error) {
    console.error('Failed to retrieve contacts:', error);
    throw error; // Re-throw the error if you want to handle it in the component
  }
};

export const deleteContact = async (contactId) => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${API_BASE_URL}/contacts/${contactId}`, { // Ensure the endpoint matches your backend route
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // This will return the confirmation message from the backend if successful
  } catch (error) {
    console.error('Failed to delete contact:', error);
    throw error; // Re-throw the error if you want to handle it in the component
  }
};
