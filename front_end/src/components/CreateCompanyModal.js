import React, { useState } from 'react';
import { createCompany } from '../api/companyService';
import './css/CreateJob.css';

const CreateCompany = ({ closeModal }) => {
  const [companyDetails, setCompanyDetails] = useState({
    name: '',
    industry: '',
    location: '',
    description: '',
  });

  const handleCompanySubmit = async (e) => {
    e.preventDefault();
    try {
      const company = await createCompany(companyDetails);
      console.log('Company created successfully:', company);
      closeModal();
    } catch (error) {
      console.error('Error creating company:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyDetails(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="modal-overlay">
      <form onSubmit={handleCompanySubmit} className="modal-content">
        <h1 className="text-3xl font-semibold text-center text-blue-500">Create New Company</h1>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={companyDetails.name}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter company name"
          />
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry</label>
          <input
            id="industry"
            name="industry"
            type="text"
            value={companyDetails.industry}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter industry"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            id="location"
            name="location"
            type="text"
            value={companyDetails.location}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter company location"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <input
            id="description"
            name="description"
            type="text"
            value={companyDetails.description}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter company description"
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
        <button className="create-db" onClick={closeModal}>Close</button>
      </form>
    </div>
  );
};

export default CreateCompany;
