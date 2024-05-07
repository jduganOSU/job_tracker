const API_BASE_URL = 'http://localhost:5040'; // Change this to the URL of your backend

export const createJob = async (jobData) => {
    console.log('attempting post');
  try {
    const response = await fetch(`${API_BASE_URL}/jobs`, { // Ensure the endpoint matches your backend route
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
  console.log('Fetching all jobs');
  try {
      const response = await fetch(`${API_BASE_URL}/jobs`, { // Ensure the endpoint matches your backend route
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
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
