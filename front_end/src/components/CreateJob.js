import React, { useState } from 'react';
import { createJob } from '../api/jobService';  // Adjust the path as necessary
import './css/CreateJob.css'

const CreateJob = ({ closeModal, onJobCreate }) => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    company: '',
    skills: [],
    status: 'open',
  });

  const [skillInput, setSkillInput] = useState('');

  const handleJobSubmit = async (e) => {
    e.preventDefault();
    try {
      const job = await createJob(jobDetails);
      onJobCreate(job);
      closeModal();  // Close the modal on successful job creation
    } catch (error) {
      console.error('Error creating job:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleAddSkill = () => {
    if (!jobDetails.skills.includes(skillInput) && skillInput.trim() !== '') {
      setJobDetails({ ...jobDetails, skills: [...jobDetails.skills, skillInput.trim()] });
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setJobDetails({
      ...jobDetails,
      skills: jobDetails.skills.filter(skill => skill !== skillToRemove),
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1 className="text-3xl font-semibold text-center">New Job Entry</h1>
        <form onSubmit={handleJobSubmit} className="job-form">
          <input type="text" name="title" placeholder="Enter job title" value={jobDetails.title} onChange={handleInputChange} />
          <textarea name="description" placeholder="Enter job description" value={jobDetails.description} onChange={handleInputChange} />
          <input type="text" name="company" placeholder="Enter company name" value={jobDetails.company} onChange={handleInputChange} />
          <div>
            {jobDetails.skills.map((skill, index) => (
              <div key={index}>
                <span>{skill}</span>
                <button type="button" onClick={() => handleRemoveSkill(skill)}>Remove</button>
              </div>
            ))}
            <input type="text" placeholder="Enter a skill" value={skillInput} onChange={e => setSkillInput(e.target.value)} />
            <button type="button" onClick={handleAddSkill}>Add Skill</button>
          </div>
          <select name="status" value={jobDetails.status} onChange={handleInputChange}>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="pending">Pending</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default CreateJob;
