import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { fetchPlants } from '../services/plantService'; // Import the API service

const ProductGrid = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPlants = async () => {
      try {
        const plantData = await fetchPlants();
        console.log('Fetched plant data:', plantData); 
        setProducts(plantData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load plants:', error);
        setLoading(false);
      }
    };

    getPlants();
  }, []); 

  const addToCart = (product) => {
    console.log('Adding to cart:', product); 
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    console.log('Removing from cart:', productId); 
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="relative">
      <div className="absolute top-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg cursor-pointer">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs p-1">
          {cart.length}
        </span>
      </div>

      <section className="p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">New Arrivals</h2>

        {loading ? (
          <div className="flex justify-center items-center">
            <p className="text-gray-600">Loading plants...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {products.map((product) => (
              <div key={product.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-xl transition-all">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-medium text-center">{product.name}</h3>
                <p className="text-center text-gray-600 mb-4">{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full mt-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {cart.length > 0 && (
        <div className="fixed top-0 right-0 bg-white shadow-xl p-4 w-64 h-screen overflow-auto">
          <h3 className="text-xl font-bold mb-4">Your Cart</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <span className="text-sm">{item.name}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 text-xs"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="font-bold text-lg">
              Total: ${cart.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0).toFixed(2)}
            </p>
            <button className="w-full mt-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
