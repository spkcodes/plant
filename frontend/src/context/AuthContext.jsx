import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { login, signup } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token });
    }
  }, []);

  const setAxiosAuthHeader = (token) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await login(email, password);
      const token = response.data.token;
      setUser({ token });
      localStorage.setItem('token', token);
      setAxiosAuthHeader(token); // Automatically add token to all axios requests
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleSignup = async (userData) => {
    try {
      const response = await signup(userData);
      const token = response.data.token;
      setUser({ token });
      localStorage.setItem('token', token);
      setAxiosAuthHeader(token);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setAxiosAuthHeader(null);
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleSignup, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
