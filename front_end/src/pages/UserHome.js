import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import JobList from '../components/JobList';
import { getAllJobs } from '../api/jobService';

const UserHome = () => {
  const [jobs, setJobs] = useState([]);

  const handleLogout = () => {
    // Logic to handle user logout
    console.log('Logout');
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const fetchedJobs = await getAllJobs();
      setJobs(fetchedJobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleJobCreate = (newJob) => {
    setJobs([...jobs, newJob]);
  };

  const handleJobDelete = (jobId) => {
    setJobs(jobs.filter(job => job._id !== jobId));
  };

  return (
    <div style={{ display: 'flex' }}>
      <div className='sidebarDiv' style={{
        height: '100vh',
        width: '15%'
      }}>
        <Sidebar onLogout={handleLogout} onJobCreate={handleJobCreate} />
      </div>
      <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: 'white'}}>Welcome to Your Dashboard</h1>
        <p style={{ color: 'white' }}>This is your personal dashboard. From here, you can access all the features available to you.</p>
        <JobList jobs={jobs} onDeleteJob={handleJobDelete} />
      </div>
    </div>
  );
};

export default UserHome;
