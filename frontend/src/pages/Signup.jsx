import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { signup } from '../services/authService'; // Import the signup API function

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {firstName,lastName,email,password};

    try {
      await signup(userData);
      navigate('/');
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <header className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold text-gray-800">Anywhere App</h1>
        <nav className="space-x-6">
          <button onClick={() => navigate('/')} className="text-gray-600 hover:text-blue-600">
            Home
          </button>
          <button onClick={() => navigate('/')} className="text-gray-600 hover:text-blue-600">
            Log In
          </button>
        </nav>
      </header>

      <main className="flex flex-grow items-center justify-between px-10 lg:px-20">
        <div className="w-full max-w-lg space-y-6">
          <div>
            <h2 className="text-lg text-gray-500">START FOR FREE</h2>
            <h1 className="text-3xl font-bold text-gray-800">Create new account.</h1>
            <p className="text-sm text-gray-600">
              Already a Member?{" "}
              <button onClick={() => navigate('/')} className="text-blue-600 hover:underline">
                Log In
              </button>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              Create account
            </button>
          </form>
        </div>

        <div className="hidden lg:block w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-70"></div>
            <img
              src="https://unsplash.com/photos/T_Qe4QlMIvQ/download?force=true&w=1920"
              alt="Scenic background"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
