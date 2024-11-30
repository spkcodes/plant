import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { user } = useAuth();
  const { cart, fetchCart, removeFromCart } = useCart();

  useEffect(() => {
    if (user) {
      fetchCart(user._id); 
    }
  }, [user, fetchCart]);

  const handleRemoveFromCart = (productId) => {
    if (user) {
      removeFromCart(user._id, productId);
    } else {
      alert("Please log in to remove items from your cart.");
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.productId}>
            <h2>{item.productId.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleRemoveFromCart(item.productId._id)}>
              Remove from Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
