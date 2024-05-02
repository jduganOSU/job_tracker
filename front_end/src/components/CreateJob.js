import React, { useState } from 'react';
import { Theme, Flex, Text, TextField, Button } from '@radix-ui/themes';
import { Cross2Icon } from '@radix-ui/react-icons';

const CreateJob = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    company: '',
    skills: [],
    status: 'open',
  });

  const [skillInput, setSkillInput] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSkillInputChange = (e) => {
    setSkillInput(e.target.value);
  };

  const handleAddSkill = () => {
    if (skillInput && !jobDetails.skills.includes(skillInput)) {
      setJobDetails({ ...jobDetails, skills: [...jobDetails.skills, skillInput] });
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setJobDetails({
      ...jobDetails,
      skills: jobDetails.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the submission of the job details
    console.log(jobDetails);
  };

  return (
    <Theme>
      <Flex direction="column" gap="2">
        <Text size="2" css={{ marginBottom: '1rem' }}>New Job Entry</Text>
        
        <TextField 
          name="title" 
          value={jobDetails.title} 
          onChange={handleInputChange} 
          placeholder="Job Title" 
          required 
        />
        
        <TextField 
          name="description" 
          value={jobDetails.description} 
          onChange={handleInputChange} 
          placeholder="Job Description" 
          required 
        />
        
        <TextField 
          name="company" 
          value={jobDetails.company} 
          onChange={handleInputChange} 
          placeholder="Company Name" 
        />
        
        <Flex css={{ flexDirection: 'row', flexWrap: 'wrap', gap: '10px' }}>
          {jobDetails.skills.map((skill, index) => (
            <Flex key={index} css={{ alignItems: 'center', gap: '6px' }}>
              <Text>{skill}</Text>
              <Button onClick={() => handleRemoveSkill(skill)}>
                <Cross2Icon />
              </Button>
            </Flex>
          ))}
          <TextField 
            value={skillInput} 
            onChange={handleSkillInputChange} 
            placeholder="Enter a skill" 
            css={{ width: 'auto', flexGrow: 1 }}
          />
          <Button onClick={handleAddSkill}>Add Skill</Button>
        </Flex>
        
        <TextField 
          name="status" 
          value={jobDetails.status} 
          onChange={handleInputChange} 
          placeholder="Status" 
        />
        
        <Button variant="blue" onClick={handleSubmit}>Submit</Button>
      </Flex>
    </Theme>
  );
};

export default CreateJob;
