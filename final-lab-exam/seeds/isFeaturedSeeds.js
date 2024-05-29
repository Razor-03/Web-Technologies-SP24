const mongoose = require("mongoose");
const User = require('../models/user'); // Ensure you have a valid User model
const Property = require('../models/property');

mongoose.connect('mongodb://localhost:27017/envision-estate');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once("open", () => {
    console.log("Databse connected");
});

const properties = [
    {
        title: "Modern Apartment in City Center",
        images: [
            { url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D", filename: "image1.jpg" },
            { url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D", filename: "image2.jpg" }
        ],
        type: "Rent",
        description: "A beautiful and modern apartment located in the heart of the city.",
        bedroom: 2,
        bathroom: 1,
        price: 1500,
        address: "123 Main St, City Center",
        property: "Apartment",
        location: {
            type: "Point",
            coordinates: [-73.935242, 40.730610]
        },
        size: 850,
        city: "New York",
        school: "City Elementary School",
        bus: "Bus stop 5",
        restaurant: "Central Diner",
        isFeatured: true,
        author: new mongoose.Types.ObjectId('66449572e53672e0b5d79bb1')
    },
    {
        title: "Spacious Family House",
        images: [
            { url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D", filename: "image3.jpg" },
            { url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D", filename: "image4.jpg" }
        ],
        type: "Buy",
        description: "A spacious house perfect for a growing family.",
        bedroom: 4,
        bathroom: 3,
        price: 450000,
        address: "456 Elm St, Suburbia",
        property: "House",
        location: {
            type: "Point",
            coordinates: [-118.243683, 34.052235]
        },
        size: 2500,
        city: "Los Angeles",
        school: "Suburbia High School",
        bus: "Bus stop 12",
        restaurant: "Family Bistro",
        isFeatured: true,
        author: new mongoose.Types.ObjectId('66449572e53672e0b5d79bb1')
    },
    {
        title: "Luxury Condo with Ocean View",
        images: [
            { url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D", filename: "image5.jpg" },
            { url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D", filename: "image6.jpg" }
        ],
        type: "Rent",
        description: "A luxurious condo offering stunning ocean views.",
        bedroom: 3,
        bathroom: 2,
        price: 3500,
        address: "789 Ocean Blvd, Beachside",
        property: "Condo",
        location: {
            type: "Point",
            coordinates: [-80.191790, 25.761680]
        },
        size: 1200,
        city: "Miami",
        school: "Beachside Elementary",
        bus: "Bus stop 3",
        restaurant: "Seaside Grill",
        isFeatured: true,
        author: new mongoose.Types.ObjectId('66449572e53672e0b5d79bb1')
    },
    {
        title: "Cozy Condo in the Suburbs",
        images: [
            { url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D", filename: "image7.jpg" },
            { url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D", filename: "image8.jpg" }
        ],
        type: "Buy",
        description: "A cozy condo located in a quiet suburban neighborhood.",
        bedroom: 2,
        bathroom: 2,
        price: 200000,
        address: "101 Maple Ave, Suburban Area",
        property: "Condo",
        location: {
            type: "Point",
            coordinates: [-95.369803, 29.760427]
        },
        size: 950,
        city: "Houston",
        school: "Maple Elementary",
        bus: "Bus stop 8",
        restaurant: "Suburban Diner",
        isFeatured: true,
        author: new mongoose.Types.ObjectId('66449572e53672e0b5d79bb1')
    },
    {
        title: "Elegant House with Large Garden",
        images: [
            { url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D", filename: "image9.jpg" },
            { url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D", filename: "image10.jpg" }
        ],
        type: "Rent",
        description: "An elegant house featuring a large garden and modern amenities.",
        bedroom: 5,
        bathroom: 4,
        price: 5000,
        address: "202 Oak St, Greenfield",
        property: "House",
        location: {
            type: "Point",
            coordinates: [-122.419418, 37.774929]
        },
        size: 3000,
        city: "San Francisco",
        school: "Greenfield High",
        bus: "Bus stop 1",
        restaurant: "Garden Cafe",
        isFeatured: true,
        author: new mongoose.Types.ObjectId('66449572e53672e0b5d79bb1')
    },
    {
        title: "Affordable Apartment Close to Metro",
        images: [
            { url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D", filename: "image11.jpg" },
            { url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D", filename: "image12.jpg" }
        ],
        type: "Buy",
        description: "An affordable apartment conveniently located close to the metro.",
        bedroom: 1,
        bathroom: 1,
        price: 120000,
        address: "303 Pine St, Metroville",
        property: "Apartment",
        location: {
            type: "Point",
            coordinates: [-87.629799, 41.878113]
        },
        size: 600,
        city: "Chicago",
        school: "Metro Elementary",
        bus: "Bus stop 7",
        restaurant: "Metro Grill",
        isFeatured: true,
        author: new mongoose.Types.ObjectId('66449572e53672e0b5d79bb1')
    }
];

Property.insertMany(properties)
    .then(() => {
        console.log("Properties added successfully");
        mongoose.connection.close();
    })
    .catch(err => {
        console.error("Error adding properties: ", err);
        mongoose.connection.close();
    });
