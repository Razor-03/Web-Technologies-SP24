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

const seedDB = async () => {
    await Property.deleteMany();
    for (let property of listData) {
        const estate = new Property({...property, author:'66449572e53672e0b5d79bb1'});
        await estate.save();
    }
}

seedDB().then(console.log("done with that!"));