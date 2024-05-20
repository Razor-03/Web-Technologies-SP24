const mongoose = require("mongoose");
const User = require('./user');
const Schema = mongoose.Schema;

const propertySchema = Schema({
    title: String,
    images: [
        {
            url: String,
            filename: String
        }
    ],
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
    restaurant: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Property', propertySchema);