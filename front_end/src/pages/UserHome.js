import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import JobList from '../components/JobList';
import SearchBar from '../components/SearchBar'; // Import the SearchBar component
import { getAllJobs } from '../api/jobService';


const UserHome = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token or any other user session data
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const fetchedJobs = await getAllJobs();
      setJobs(fetchedJobs);
      setFilteredJobs(fetchedJobs);  // Ensure this line is here to initialize filteredJobs
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredJobs(jobs); // Display all jobs if the search term is empty
      return;
    }
    const term = searchTerm.toLowerCase();
    const filtered = jobs.filter(job =>
      job.title.toLowerCase().includes(term) ||
      (job.skills && job.skills.some(skill => skill.toLowerCase().includes(term)))
    );
    setFilteredJobs(filtered);
  };

  const handleJobCreate = (newJob) => {
    setJobs([...jobs, newJob]);
  };

  const handleJobDelete = (jobId) => {
    window.location.reload();
  };

  const handleSortChange = (sortOption) => {
    const sortedJobs = [...jobs].sort((a, b) => {
      if (sortOption === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortOption === 'status') {
        return a.status.localeCompare(b.status);
      } else if (sortOption === 'company') {
        return a.company.localeCompare(b.company);
      }
      return 0;
    });
    setFilteredJobs(sortedJobs);
  };

  return (
    <div style={{ display: 'flex', backgroundColor: 'white' }}>
      <div className='sidebarDiv' style={{
        height: '100vh',
        width: '15%'
      }}>
        <Sidebar onLogout={handleLogout} onJobCreate={handleJobCreate} onSortChange={handleSortChange} />
      </div>
      <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
        <h1 
        style={{ color: 'black', fontWeight: '600', fontSize: '24px'}}>
        Welcome to Your Dashboard
        </h1>
        <p style={{ color: 'black', fontWeight: '500', fontSize: '18px'}}>
          This is your personal dashboard. From here, you can access all the features available to you.</p>
        <SearchBar onSearch={handleSearch} />
        <JobList jobs={filteredJobs} onDeleteJob={handleJobDelete} />
      </div>
    </div>
  );
};

export default UserHome;
