const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
    username: String,
    avatar: {
        url: String,
        filename: String
    },
    email: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);