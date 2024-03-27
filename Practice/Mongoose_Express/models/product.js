const mongoose = require('mongoose');

const produtcSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy', 'crafting component']
    }
});

const Product = mongoose.model('Product', produtcSchema);

module.exports = Product;