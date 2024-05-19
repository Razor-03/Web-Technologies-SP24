const express = require("express");
const router = express.Router();
const Property = require("../models/property");

router.get('/', async (req, res) => {
    const properties = await Property.find({});
    res.render('properties/index', { properties });
    
});

router.get('/new', (req, res) => {
    res.render('properties/new');
});

router.get('/:id', async (req, res) => {
    const property = await Property.findById(req.params.id).populate('author');
    console.log(property);
    res.render('properties/show', { property });
});

router.get('/:id/edit', async (req, res) => {
    const property = await Property.findById(req.params.id);
    res.render('properties/edit', { property });
});

router.post('/', async (req, res) => {
    const property = new Property(req.body.property);
    await property.save();
    res.redirect(`/properties/${property._id}`);
    // console.log(req.body.property);
});

router.put('/:id', async (req, res) => {
    // res.send(req.body.property);
    const property = await Property.findByIdAndUpdate(req.params.id, {...req.body.property});
    res.redirect(`/properties/${req.params.id}`);
});

router.delete('/:id', async (req, res) => {
    const property = await Property.findByIdAndDelete(req.params.id);
    res.redirect(`/properties`);
});

module.exports = router;