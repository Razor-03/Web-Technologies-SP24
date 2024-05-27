const express = require('express');
const router = express.Router();
const Property = require('../models/property'); // Assuming Property model is in models/property
const upload = require('../utils/multer'); // Assuming you have multer setup for file uploads
const { cloudinary } = require('../utils/cloudinary'); // Assuming you have Cloudinary setup
const geocoder = require('../utils/geocoder'); // Assuming you have a geocoder setup for location

// Fetch properties with pagination and filtering
router.get('/api/properties', async (req, res) => {
    try {
        const { location, minPrice, maxPrice, type, property, bedroom, bathroom, page = 1, limit = 12 } = req.query;

        let query = {};

        if (location) {
            query.$or = [
                { city: new RegExp(location, 'i') },
                { address: new RegExp(location, 'i') }
            ];
        }

        if (minPrice) {
            query.price = { ...query.price, $gte: parseInt(minPrice) };
        }

        if (maxPrice) {
            query.price = { ...query.price, $lte: parseInt(maxPrice) };
        }

        if (bedroom) {
            query.bedroom = { ...query.bedroom, $gte: parseInt(bedroom) };
        }

        if (bathroom) {
            query.bathroom = { ...query.bathroom, $gte: parseInt(bathroom) };
        }

        if(type) {
            query.type = type;
        }

        if(property) {
            query.property = property;
        }

        const properties = await Property.find(query)

        res.json({ properties });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});

// Create a new property
router.post('/api/properties', upload.array("image"), async (req, res) => {
    try {
        const geoData = await geocoder.forwardGeocode({
            query: req.body.property.city,
            limit: 1
        }).send();
        const property = new Property(req.body.property);
        property.location = geoData.body.features[0].geometry;
        property.images = req.files.map(file => ({ url: file.path, filename: file.filename }));
        await property.save();
        res.status(201).json(property);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});

// Fetch a single property by ID
router.get('/api/properties/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate('author');
        if (!property) {
            return res.status(404).json({ error: "Property not found" });
        }
        res.json(property);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});

// Update an existing property
router.put('/api/properties/:id', upload.array("image"), async (req, res) => {
    try {
        let property = await Property.findByIdAndUpdate(req.params.id, { ...req.body.property }, { new: true });
        if (!property) {
            return res.status(404).json({ error: "Property not found" });
        }
        const images = req.files.map(file => ({ url: file.path, filename: file.filename }));
        property.images.push(...images);
        await property.save();
        if (req.body.deleteImages) {
            for(let filename of req.body.deleteImages) {
                await cloudinary.uploader.destroy(filename);
            }
            await property.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } });
        }
        res.json(property);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});

// Delete a property by ID
router.delete('/api/properties/:id', async (req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);
        if (!property) {
            return res.status(404).json({ error: "Property not found" });
        }
        res.status(204).json({ message: "Property deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;
