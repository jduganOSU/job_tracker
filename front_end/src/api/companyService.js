const API_BASE_URL = 'http://localhost:5040'; // Change this to the URL of your backend

export const createCompany = async (companyData) => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${API_BASE_URL}/company`, { // Ensure the endpoint matches your backend route
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(companyData)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // This will return the job data from the backend if successful
  } catch (error) {
    console.error('Failed to create company:', error);
    throw error; // Re-throw the error if you want to handle it in the component
  }
};

export const getAllCompanies = async () => {
  const token = localStorage.getItem('token');
  try {
      const response = await fetch(`${API_BASE_URL}/company`, { // Ensure the endpoint matches your backend route
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
      console.error('Failed to retrieve companies:', error);
      throw error; // Re-throw the error if you want to handle it in the component
  }
};

export const deleteCompany = async (companyId) => {
  console.log('Attempting to delete company');
  try {
      const response = await fetch(`${API_BASE_URL}/company/${companyId}`, { // Use template literals to include the job ID
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
      console.error('Failed to delete company:', error);
      throw error; // Re-throw the error if you want to handle it in the component
  }
};