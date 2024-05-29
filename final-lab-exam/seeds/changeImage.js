const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { listData } = require("./seedHelper");
const Property = require("../models/property");


// console.log(listData);

mongoose.connect('mongodb://localhost:27017/envision-estate');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once("open", () => {
    console.log("Databse connected");
});

const productId = ObjectId('your_product_id'); // Replace 'your_product_id' with the actual product ID
const newImageUrl = 'https://example.com/new_image.jpg'; // Replace 'https://example.com/new_image.jpg' with the new image URL

// Update the document
db.products.findOneAndUpdate(
    { _id: productId }, // Filter for the product by its ID
    { $set: { 'images.0.url': newImageUrl } }, // Update the URL of the first image
    { returnOriginal: false } // Return the updated document
);