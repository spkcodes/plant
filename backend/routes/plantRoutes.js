// routes/plantRoutes.js
import express from 'express';
import { getPlants } from '../controllers/plantController.js'; // Import the controller function

const router = express.Router();

// Route to get all plants
router.get('/plant', getPlants); // Define GET route for "/plant" to fetch plants

export default router; // Export the router for use in your main server file
