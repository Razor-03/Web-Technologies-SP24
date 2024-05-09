const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = Schema({
    title: String,
    img: String,
    bedroom: Number,
    bathroom: Number,
    price: Number,
    address: String,
    latitude: Number,
    longitude: Number,
});

module.exports = mongoose.model('Property', propertySchema);