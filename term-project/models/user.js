const mongoose = require("mongoose");
const Property = require('./property');
const Schema = mongoose.Schema;

const userSchema = Schema({
    username: String,
    avatar: {
        url: String,
        filename: String
    },
    saved: [
        {
            type: Schema.Types.ObjectId,
            ref: "Property"
        }
    ],
    email: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);