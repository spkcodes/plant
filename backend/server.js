// /server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import CORS
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import plantRoutes from './routes/plantRoutes.js';
import cartRoutes from './routes/cartRouters.js';


// Initialize app
const app = express();

// Load environment variables
dotenv.config();

// Enable CORS for all origins (you can configure this for specific origins if needed)
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend origin
}));

// Body parser middleware
app.use(express.json());

// MongoDB connection
connectDB();

// Routes
app.use('/cart', cartRoutes);

app.use('/api/auth', authRoutes);
app.use('/api/plants', plantRoutes);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
