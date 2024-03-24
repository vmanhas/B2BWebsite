const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.URI);
app.use(cors());

const ProductSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  image: String
});

const ProductModel = mongoose.model("products", ProductSchema);

app.get('/api', async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    console.error("Error getting products:", error);
    res.status(500).json({ message: "Error retrieving products" });
  }  
});

app.listen(5000, () => console.log('Backend listening on port 5000'));
