const API_BASE_URL = 'http://localhost:5040'; // Change this to the URL of your backend

export const createCompany = async (companyData) => {
    console.log('attempting post');
  try {
    const response = await fetch(`${API_BASE_URL}/company`, { // Ensure the endpoint matches your backend route
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
  console.log('Fetching all comapnies');
  try {
      const response = await fetch(`${API_BASE_URL}/company`, { // Ensure the endpoint matches your backend route
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
      console.error('Failed to retrieve companies:', error);
      throw error; // Re-throw the error if you want to handle it in the component
  }
};