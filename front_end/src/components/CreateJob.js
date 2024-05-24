import React, { useState, useEffect } from 'react';
import { createJob } from '../api/jobService';  // Adjust the path as necessary
import { getAllCompanies } from '../api/companyService';
import { getAllSkills } from '../api/skillsService';
import './css/CreateJob.css';

const CreateJob = ({ closeModal, onJobCreate }) => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    company: '',
    skills: [],
    status: 'open',
  });

  const [skillInput, setSkillInput] = useState('');
  const [companies, setCompanies] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchCompanies();
    fetchSkills();
  }, []);

  const fetchCompanies = async () => {
    try {
      const fetchedCompanies = await getAllCompanies();
      setCompanies(fetchedCompanies);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };

  const fetchSkills = async () => {
    try {
      const fetchedSkills = await getAllSkills();
      setSkills(fetchedSkills);
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  };

  const handleJobSubmit = async (e) => {
    e.preventDefault();
    try {
      const job = await createJob(jobDetails);
      console.log('Job created successfully:', job);
      if (onJobCreate) {
        onJobCreate(job); // Call the function passed as a prop
      }
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
          <input type="text" name="title" placeholder="Enter job title" value={jobDetails.title} onChange={handleInputChange} required />
          <textarea name="description" placeholder="Enter job description" value={jobDetails.description} onChange={handleInputChange} required />
          <select name="company" value={jobDetails.company} onChange={handleInputChange} required>
            <option value="">Select a company</option>
            {companies.map(company => (
              <option key={company._id} value={company.name}>{company.name}</option>
            ))}
          </select>
          <div>
            {jobDetails.skills.map((skill, index) => (
              <div key={index}>
                <span>{skill}</span>
                <button type="button" onClick={() => handleRemoveSkill(skill)}>Remove</button>
              </div>
            ))}
            <select value={skillInput} onChange={e => setSkillInput(e.target.value)}>
              <option value="">Select a skill</option>
              {skills.map(skill => (
                <option key={skill._id} value={skill.name}>{skill.name}</option>
              ))}
            </select>
            <button className="add-skill-btn" type="button" onClick={handleAddSkill}>Add Skill</button>
          </div>
          <select name="status" value={jobDetails.status} onChange={handleInputChange} required>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="pending">Pending</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        <button className="create-db" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default CreateJob;
