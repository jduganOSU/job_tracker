import React, { useState } from 'react';
import { createSkill } from '../api/skillsService';  // Adjust the path as necessary
import './css/CreateSkill.css';  // Adjust the CSS path as necessary

const CreateSkill = ({ closeModal, onSkillCreate }) => {
  const [skillDetails, setSkillDetails] = useState({
    name: '',
    description: ''
  });

  const handleSkillSubmit = async (e) => {
    e.preventDefault();
    try {
      const skill = await createSkill(skillDetails);
      console.log('Skill created successfully:', skill);
      onSkillCreate(skill);
      closeModal();  // Close the modal on successful skill creation
    } catch (error) {
      console.error('Error creating skill:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSkillDetails({ ...skillDetails, [name]: value });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1 className="text-3xl font-semibold text-center">New Skill Entry</h1>
        <form onSubmit={handleSkillSubmit} className="skill-form">
          <input type="text" name="name" placeholder="Enter skill name" value={skillDetails.name} onChange={handleInputChange} />
          <textarea name="description" placeholder="Enter skill description" value={skillDetails.description} onChange={handleInputChange} />
          <button type="submit">Submit</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default CreateSkill;
