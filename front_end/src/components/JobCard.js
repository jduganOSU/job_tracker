import React from 'react';
import { deleteJob } from '../api/jobService'; // Adjust the import path as necessary
import './css/JobCard.css';

const JobCard = ({ job, onDeleteSuccess }) => {
    // Function to handle the click on the delete button
    const onClickDelete = async () => {
        if (window.confirm(`Are you sure you want to delete "${job.title}"?`)) {
            try {
                await deleteJob(job._id);
                alert('Job deleted successfully');
                onDeleteSuccess(); // Trigger a callback for successful deletion
            } catch (error) {
                alert('Failed to delete job');
                console.error('Error deleting the job:', error);
            }
        }
    };

    return (
        <div className="job-card">
            <div>
                <div className="job-header">
                    <h2>{job.title}</h2>
                    <span className="company-name">{job.company}</span>
                </div>
                <div className="job-details">
                    <p>Description: {job.description}</p>
                    <p>Skills: {job.skills.join(', ')}</p>
                    <p>Status: {job.status}</p>
                    <p>Posted Date: {new Date(job.postedDate).toLocaleDateString()}</p>
                </div>
            </div>
            <div className="button-container">
                <button onClick={onClickDelete}>Delete</button>
                <button>Update</button> {/* This can later be linked to an update function */}
            </div>
        </div>
    );
};

export default JobCard;
