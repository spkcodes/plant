import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(email, password);
      navigate('/signup'); 
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <header className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold text-gray-800">Anywhere App</h1>
        <nav className="space-x-6">
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-blue-600"
          >
            Home
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="text-gray-600 hover:text-blue-600"
          >
            Join
          </button>
        </nav>
      </header>

      <main className="flex flex-grow items-center justify-between px-10 lg:px-20">
        <div className="w-full max-w-lg space-y-6">
          <div>
            <h2 className="text-lg text-gray-500">WELCOME BACK</h2>
            <h1 className="text-3xl font-bold text-gray-800">Log in to your account.</h1>
            <p className="text-sm text-gray-600">
              New to Anywhere App?{" "}
              <button
                onClick={() => navigate('/signup')}
                className="text-blue-600 hover:underline"
              >
                Create an account
              </button>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
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
              Log In
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

export default Login;
