import React, { useState } from 'react';
import { deleteJob } from '../api/jobService'; // Adjust the import path as necessary
import UpdateJob from './UpdateJob';  // Import the UpdateJob component
import './css/JobCard.css';

const JobCard = ({ job, onDeleteSuccess }) => {
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

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

    const openUpdateModal = () => {
        setIsUpdateModalOpen(true);
    };

    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
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
                <button className="delete" onClick={onClickDelete}>Delete</button>
                <button onClick={openUpdateModal}>Update</button>
            </div>
            {isUpdateModalOpen && <UpdateJob job={job} closeModal={closeUpdateModal} />}
        </div>
    );
};

export default JobCard;
