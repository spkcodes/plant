import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart } = useCart();

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">
        <h1>My Shop</h1>
      </div>
      <div className="flex items-center space-x-6">
        <Link
          to="/cart"
          className="flex items-center text-white hover:text-gray-300 relative"
        >
          <span className="text-2xl">🛒</span>
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
