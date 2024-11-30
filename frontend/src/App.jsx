import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';   
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import CartPage from './pages/Cart'; 

const App = () => {
  return (
    <AuthProvider>
      <CartProvider> 
        <Router>
          <div>
            <Routes>
              <Route path="/l" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
