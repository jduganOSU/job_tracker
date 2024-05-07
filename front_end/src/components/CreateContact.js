import React, { useState } from 'react';
import { addContact } from '../api/networkContactService'; // Assuming you have this API service
import './css/CreateContact.css'; // Use a CSS file to style this component similarly

const AddContactModal = ({ closeModal }) => {
  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    company: '',
    phone: '' // Optional, add more fields as needed
  });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      const contact = await addContact(contactDetails);
      console.log('Contact added successfully:', contact);
      closeModal(); // Close the modal on successful submission
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactDetails(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="modal-overlay">
      <form onSubmit={handleContactSubmit} className="modal-content">
        <h1 className="text-3xl font-semibold text-center text-blue-500">Add New Contact</h1>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={contactDetails.name}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter contact name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={contactDetails.email}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter contact email"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            value={contactDetails.company}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter company name"
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddContactModal;
