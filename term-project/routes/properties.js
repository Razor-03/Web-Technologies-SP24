const express = require("express");
const router = express.Router();
const Property = require("../models/property");
const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({ storage });
const { requireLogin, isAuthor } = require("../middleware");
const { cloudinary } = require("../cloudinary");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding")
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({accessToken: mapBoxToken});

router.get('/', async (req, res) => {
    try {
        const { location, minPrice, maxPrice, type, property, bedroom, bathroom, page = 1, limit = 12 } = req.query;

        let query = {};

        if (location) {
            // Assuming location is a city name or part of an address
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
            query.bathroom = { ...query.bedroom, $gte: parseInt(bathroom) };
        }

        if(type) {
            query.type = type;
        }

        if(property) {
            query.property = property;
        }

        const properties = await Property.find(query)
        .skip((page - 1) * limit)
        .limit(parseInt(limit)).populate("author");
        const totalProperties = await Property.countDocuments(query);
        const totalPages = Math.ceil(totalProperties / limit);

        res.render('properties/index', { properties, currentPage: parseInt(page), totalPages, limit: parseInt(limit) });

        // const properties = await Property.find(query);

        // res.render('properties/index', { properties });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});


router.get('/new', requireLogin, (req, res) => {
    res.render('properties/new');
});

router.get('/:id', async (req, res) => {
    const property = await Property.findById(req.params.id).populate('author');
    // console.log(property);
    res.render('properties/show', { property });
});

router.get('/:id/edit', requireLogin, isAuthor, async (req, res) => {
    const property = await Property.findById(req.params.id);
    res.render('properties/edit', { property });
});

router.post('/', requireLogin, upload.array("image"), async (req, res) => {
    const geoData = await geocoder.forwardGeocode({
        query: req.body.property.city,
        limit: 1
    }).send();
    const property = new Property(req.body.property);
    property.location = geoData.body.features[0].geometry;
    property.author = req.session.user._id;
    property.images = req.files.map(file => ({ url: file.path, filename: file.filename }));
    await property.save();
    console.log(property);
    res.redirect(`/properties/${property._id}`);
    // console.log(req.body.property);
    // console.log(req.body, req.files);
    // res.send("It Worked!");
});

router.put('/:id', requireLogin, isAuthor, upload.array("image"), async (req, res) => {
    // res.send(req.body.property);
    const property = await Property.findByIdAndUpdate(req.params.id, {...req.body.property});
    const images = req.files.map(file => ({ url: file.path, filename: file.filename }));
    property.images.push(...images);
    await property.save();
    if (req.body.deleteImages) {
        for(let filename of req.body.deleteImages) {
            await cloudinary.uploader.destroy(filename);
        }
        await property.updateOne({ $pull: { images: { filename: {$in: req.body.deleteImages}}}});
    }
    res.redirect(`/properties/${req.params.id}`);
});

router.delete('/:id', requireLogin, isAuthor, async (req, res) => {
    const property = await Property.findByIdAndDelete(req.params.id);
    res.redirect(`/properties`);
});

module.exports = router;