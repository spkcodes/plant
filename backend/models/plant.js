// models/plant.js
import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
});

// Create a model using the schema
const Plant = mongoose.model('Plant', plantSchema);

export default Plant; // Ensure this export is correct
