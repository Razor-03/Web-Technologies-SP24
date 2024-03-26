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
        enum: ['fruit', 'vegetable', 'dairy']
    }
});

const Product = mongoose.model('Product', produtcSchema);

module.exports = Product;