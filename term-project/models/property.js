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
    type: {
        type: String,
        enum: ['Buy', 'Rent'],
        required: true
    },
    description: String,
    bedroom: Number,
    bathroom: Number,
    price: Number,
    address: String,
    property: {
        type: String,
        enum: ['Apartment', 'House', 'Condo'],
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ["Point"],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
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