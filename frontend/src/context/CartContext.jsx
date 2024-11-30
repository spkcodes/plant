import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCart = async (userId) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/cart/${userId}`);
      setCart(response.data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const addToCart = async (userId, productId) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/cart/add", {
        userId,
        productId,
      });
      setCart(response.data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const removeFromCart = async (userId, productId) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/cart/remove", {
        userId,
        productId,
      });
      setCart(response.data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        fetchCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
