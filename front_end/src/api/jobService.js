const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; // Change this to the URL of your backend

export const createJob = async (jobData) => {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`${API_BASE_URL}/jobs`, { // Ensure the endpoint matches your backend route
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(jobData)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // This will return the job data from the backend if successful
    } catch (error) {
        console.error('Failed to create job:', error);
        throw error; // Re-throw the error if you want to handle it in the component
    }
};

export const getAllJobs = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`${API_BASE_URL}/jobs`, { // Ensure the endpoint matches your backend route
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // This will return the job data from the backend if successful
    } catch (error) {
        console.error('Failed to retrieve jobs:', error);
        throw error; // Re-throw the error if you want to handle it in the component
    }
};

export const deleteJob = async (jobId) => {
    console.log('Attempting to delete job');
    try {
        const response = await fetch(`${API_BASE_URL}/jobs/${jobId}`, { // Use template literals to include the job ID
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // This will return the confirmation message from the backend if successful
    } catch (error) {
        console.error('Failed to delete job:', error);
        throw error; // Re-throw the error if you want to handle it in the component
    }
};

export const updateJob = async (jobId, jobData) => {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`${API_BASE_URL}/jobs/${jobId}`, { // Ensure the endpoint matches your backend route
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(jobData)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // This will return the updated job data from the backend if successful
    } catch (error) {
        console.error('Failed to update job:', error);
        throw error; // Re-throw the error if you want to handle it in the component
    }
};
