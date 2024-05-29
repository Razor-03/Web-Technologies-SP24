const express = require('express');
const router = express.Router();
const Property = require('../../models/property');
const multer = require("multer");
const { storage } = require('../../cloudinary');
const upload = multer({ storage });
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const auth = function(req, res, next) {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
    if (!token) return res.status(401).json({ error: "Access denied. No token provided." });

    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).json({ error: "Invalid token." });
    }
};

router.get('/', async (req, res) => {
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

        if (type) {
            query.type = type;
        }

        if (property) {
            query.property = property;
        }

        const properties = await Property.find(query);

        res.json({ properties });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});

router.post('/', auth, upload.array("image"), async (req, res) => {
    try {
        const geoData = await geocoder.forwardGeocode({
            query: req.body.property.city,
            limit: 1
        }).send();

        if (!geoData.body.features.length) {
            return res.status(400).json({ error: "Invalid location" });
        }

        const property = new Property(req.body.property);
        property.location = geoData.body.features[0].geometry;

        if (req.files.length) {
            property.images = req.files.map(file => ({ url: file.path, filename: file.filename }));
        }

        await property.save();
        res.status(201).json(property);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});

router.get('/:id', auth, async (req, res) => {
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

router.put('/:id', upload.array("image"), async (req, res) => {
    try {
        const updatedData = { ...req.body.property };

        if (req.files.length) {
            updatedData.images = req.files.map(file => ({ url: file.path, filename: file.filename }));
        }

        const property = await Property.findByIdAndUpdate(req.params.id, updatedData, { new: true });
        if (!property) {
            return res.status(404).json({ error: "Property not found" });
        }

        await property.save();
        res.json(property);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});

router.delete('/:id', auth, async (req, res) => {
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
