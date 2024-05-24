import React, { useState, useEffect } from 'react';
import { createContact } from '../api/contactService';
import { getAllCompanies } from '../api/companyService';
import './css/CreateContact.css';

const CreateContact = ({ closeModal }) => {
  const [contactDetails, setContactDetails] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: ''
  });

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const fetchedCompanies = await getAllCompanies();
      setCompanies(fetchedCompanies);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({ ...contactDetails, [name]: value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting contact:', contactDetails);
    try {
      const contact = await createContact(contactDetails);
      console.log('Contact created successfully:', contact);
      closeModal();
    } catch (error) {
      console.error('Error creating contact:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1 className="text-3xl font-semibold text-center">New Contact Entry</h1>
        <form onSubmit={handleContactSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Enter contact name"
            value={contactDetails.name}
            onChange={handleInputChange}
            required
          />
          <select
            name="company"
            value={contactDetails.company}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a company</option>
            {companies.map(company => (
              <option key={company._id} value={company._id}>{company.name}</option>
            ))}
          </select>
          <input
            type="text"
            name="role"
            placeholder="Enter contact role"
            value={contactDetails.role}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter contact email"
            value={contactDetails.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Enter contact phone"
            value={contactDetails.phone}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <button className="create-db" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default CreateContact;
