import React, { useState, useEffect } from 'react';
import { useCart } from "../context/CartContext";
import { fetchPlants } from '../services/plantService'; // Fetch plants from your API

const MostPopularPlants = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const getPlants = async () => {
      try {
        const plantData = await fetchPlants();
        setProducts(plantData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching plants:', error);
        setLoading(false);
      }
    };

    getPlants();
  }, []);

  if (loading) return <p>Loading plants...</p>;
  const handleAddToCart = (productId) => {
    if (user) {
      addToCart(user._id, productId); 
    } else {
      alert("Please log in to add items to your cart.");
    }
  };
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Most Popular Plants</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {products.map((plant) => (
          <div key={plant.id} className="border p-4 rounded">
            <img
              src={plant.img}
              alt={plant.name}
              className="h-32 w-full object-cover mb-4"
            />
            <h2 className="text-lg font-medium">{plant.name}</h2>
            <p className="text-gray-600">{`$${plant.price}`}</p>
            <button onClick={() => handleAddToCart(plant._id)}>Add to Cart</button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopularPlants;
