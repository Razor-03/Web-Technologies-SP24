const express = require("express");
const router = express.Router();
const Property = require("../models/property");

router.get('/', async (req, res) => {
    const properties = await Property.find({});
    res.render('properties/index', { properties });
});

router.get('/:id', async (req, res) => {
    const property = await Property.findById(req.params.id);
    res.render('properties/show', { property });
});

router.get('/:id/edit', async (req, res) => {
    const property = await Property.findById(req.params.id);
    res.render('properties/edit', { property });
});

router.put('/:id', async (req, res) => {
    // res.send(req.body.property);
    const property = await Property.findByIdAndUpdate(req.params.id, {...req.body.property});
    res.redirect(`/properties/${req.params.id}`);
});

module.exports = router;