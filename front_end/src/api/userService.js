const API_BASE_URL = 'http://localhost:5040'; // Change this to the URL of your backend

export const createUser = async (userData) => {
    console.log('attempting post');
  try {
    const response = await fetch(`${API_BASE_URL}/user`, { // Ensure the endpoint matches your backend route
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // This will return the user data from the backend if successful
  } catch (error) {
    console.error('Failed to create job:', error);
    throw error; // Re-throw the error if you want to handle it in the component
  }
};

export const loginUser = async (email, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/user/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password })
        });
    
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to login');
        }
    
        const data =  await response.json(); // This will return the token and user details if successful
        localStorage.setItem('token', data.token);
        return data;
      } catch (error) {
        console.error('Login failed:', error);
        throw error; // Re-throw the error to handle it in the calling component
      }
};