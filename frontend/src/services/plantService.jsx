import axios from 'axios';

const apiUrl = "http://localhost:5000"; 

export const fetchPlants = async () => {
  try {
    const response = await axios.get(`${apiUrl}/api/plants/plant`); // Ensure the correct endpoint is used here
    console.log('Fetched plants:', response.data);  // Log the data for debugging
    return response.data; 
  } catch (error) {
    console.error('Error fetching plants:', error);
    throw error; 
  }
};



const addToCart = async (product) => {
    try {
      const response = await axios.post(`${apiUrl}/api/cart/add`, product, {
        headers: { Authorization: `Bearer ${token}` } // Add the token if needed
      });
      console.log('Product added to cart:', response.data);
      
      setCart(response.data); 
    } catch (error) {
      console.error('Failed to add product to cart:', error);
    }
  };
  