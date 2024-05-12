const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = Schema({
    title: String,
    images: [String],
    description: String,
    bedroom: Number,
    bathroom: Number,
    price: Number,
    address: String,
    latitude: Number,
    longitude: Number,
    size: Number,
    city: String,
    school: String,
    bus: String,
    restaurant: String
});

module.exports = mongoose.model('Property', propertySchema);