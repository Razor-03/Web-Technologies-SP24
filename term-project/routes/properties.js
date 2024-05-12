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

module.exports = router;