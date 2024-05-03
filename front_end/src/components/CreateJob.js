import React, { useState } from 'react';

const CreateJob = () => {
  // State for job details
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    company: '',
    skills: [],
    status: 'open',
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  // Function to add a skill to the job details
  const handleAddSkill = () => {
    if (jobDetails.skills.indexOf(skillInput) === -1 && skillInput !== '') {
      setJobDetails({ ...jobDetails, skills: [...jobDetails.skills, skillInput] });
      setSkillInput('');
    }
  };

  // Function to remove a skill from the job details
  const handleRemoveSkill = (skillToRemove) => {
    setJobDetails({
      ...jobDetails,
      skills: jobDetails.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  // State for the input field for adding skills
  const [skillInput, setSkillInput] = useState('');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h1 className="text-3xl font-semibold text-center text-blue-500">New Job Entry</h1>

        {/* Job Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Job Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={jobDetails.title}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter job title"
          />
        </div>

        {/* Job Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Job Description</label>
          <textarea
            id="description"
            name="description"
            value={jobDetails.description}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter job description"
          />
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            id="company"
            name="company"
            type="text"
            value={jobDetails.company}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter company name"
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Skills</label>
          <div className="mt-1 flex flex-wrap gap-2">
            {jobDetails.skills.map((skill, index) => (
              <div key={index} className="bg-blue-500 text-white rounded-md px-2 py-1 flex items-center">
                <span>{skill}</span>
                <button onClick={() => handleRemoveSkill(skill)} className="ml-2 text-red-600">
                  Remove
                </button>
              </div>
            ))}
            <input
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter a skill"
            />
            <button onClick={handleAddSkill} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Skill
            </button>
          </div>
        </div>

        {/* Status */}
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
          <select
            id="status"
            name="status"
            value={jobDetails.status}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        {/* Submit button */}
        <button onClick={() => console.log(jobDetails)} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateJob;
