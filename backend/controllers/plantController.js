// controllers/plantController.js
import Plant from '../models/plant.js'; // Ensure correct import with `.js`

// Controller to get all plants
export const getPlants = async (req, res) => {
  try {
    const plants = await Plant.find(); // Fetch all plants from the database
    res.json(plants); // Return the list of plants as JSON
  } catch (err) {
    res.status(500).json({ error: 'Server error' }); // Handle server error
  }
};





// Mock cart data for simplicity
let cart = [];

// Fetch cart data
exports.getCart = (req, res) => {
  res.json(cart);
};

// Add item to the cart
exports.addToCart = (req, res) => {
  const { productId, quantity, name, price, img } = req.body;

  // Check if the product already exists in the cart
  const existingProductIndex = cart.findIndex(item => item.productId === productId);

  if (existingProductIndex >= 0) {
    // Update quantity if the product is already in the cart
    cart[existingProductIndex].quantity += quantity;
  } else {
    // Add new product to cart
    cart.push({ productId, quantity, name, price, img });
  }

  res.json(cart);
};

// Update product quantity in the cart
exports.updateCartQuantity = (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;

  const productIndex = cart.findIndex(item => item.productId === productId);

  if (productIndex >= 0) {
    cart[productIndex].quantity = quantity;
  }

  res.json(cart);
};

// Remove product from the cart
exports.removeFromCart = (req, res) => {
  const { productId } = req.params;
  cart = cart.filter(item => item.productId !== productId);
  res.json(cart);
};

// Checkout the cart (empty it after successful purchase)
exports.checkout = (req, res) => {
  // Simulate checkout process (e.g., payment)
  cart = []; // Empty the cart after purchase
  res.json({ message: 'Purchase successful' });
};
