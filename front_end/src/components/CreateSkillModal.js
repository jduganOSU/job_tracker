import React, { useState } from 'react';
import { addSkill } from '../api/skillService'; // Assuming you have a skillService for API interactions
import './css/CreateSkill.css'; // Assuming similar CSS for styling this component

const CreateSkill = ({ closeModal }) => {
  const [skillDetails, setSkillDetails] = useState({
    name: '',
    description: ''
  });

  const handleSkillSubmit = async (e) => {
    e.preventDefault();
    try {
      const skill = await addSkill(skillDetails);
      console.log('Skill added successfully:', skill);
      closeModal(); // Close the modal on successful submission
    } catch (error) {
      console.error('Error adding skill:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSkillDetails(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="modal-overlay">
      <form onSubmit={handleSkillSubmit} className="modal-content">
        <h1 className="text-3xl font-semibold text-center text-blue-500">Add New Skill</h1>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Skill Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={skillDetails.name}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter skill name"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <input
            id="description"
            name="description"
            type="text"
            value={skillDetails.description}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Describe the skill"
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateSkill;
