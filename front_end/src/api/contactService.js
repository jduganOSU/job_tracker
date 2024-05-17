import axios from 'axios';

const API_BASE_URL = 'http://localhost:5040'; // Change this to the URL of your backend

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});

export const createContact = async (contactData) => {
  try {
    const response = await api.post('/contacts', contactData);
    return response.data;
  } catch (error) {
    console.error('Failed to create contact:', error);
    throw error;
  }
};

export const getAllContacts = async () => {
  try {
    const response = await api.get('/contacts');
    return response.data;
  } catch (error) {
    console.error('Failed to retrieve contacts:', error);
    throw error;
  }
};

export const getContactById = async (contactId) => {
  try {
    const response = await api.get(`/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to retrieve contact:', error);
    throw error;
  }
};

export const updateContact = async (contactId, contactData) => {
  try {
    const response = await api.put(`/contacts/${contactId}`, contactData);
    return response.data;
  } catch (error) {
    console.error('Failed to update contact:', error);
    throw error;
  }
};

export const deleteContact = async (contactId) => {
  try {
    const response = await api.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete contact:', error);
    throw error;
  }
};
