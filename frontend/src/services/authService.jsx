import axios from 'axios';

const apiUrl = "http://localhost:5000";

export const login = async (email, password) => {
  try {
    console.log("User Data being sent:", { email, password });
    console.log("API URL being used for login:", `${apiUrl}/api/auth/login`);

    const response = await axios.post(`${apiUrl}/api/auth/login`, { email, password });
    console.log("Response from login API:", response.data);

    return response.data;
  } catch (error) {
    console.error('Login failed:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const signup = async (userData) => {
  try {
    console.log("User Data being sent:", userData);
    console.log("API URL being used for signup:", `${apiUrl}/api/auth/signup`);

    const response = await axios.post(`${apiUrl}/api/auth/signup`, userData);
    console.log("Response from signup API:", response.data.token);

    return response.data;
  } catch (error) {
    console.error('Signup failed:', error.response ? error.response.data : error.message);
    throw error;
  }
};
