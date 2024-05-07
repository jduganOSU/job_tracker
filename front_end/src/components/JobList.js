import React from 'react';
import JobCard from './JobCard';

const JobList = ({ jobs, onDeleteJob }) => {
  return (
    <div style={{
        display: 'flex',
        flexWrap: 'wrap', // Enables the wrapping of child elements
    }}>
      {jobs.length > 0 ? (
        jobs.map(job => <JobCard key={job._id} job={job} onDeleteSuccess={() => onDeleteJob(job._id)} />)
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
};

export default JobList;
