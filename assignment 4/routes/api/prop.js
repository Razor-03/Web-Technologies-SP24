const express = require("express");
const router = express.Router();
const Property = require("../../models/property");

router.get('/', async (req, res) => {
    const properties = await Property.find({});
    res.json(properties);
});

router.get('/:id', async (req, res) => {
    const property = await Property.findById(req.params.id);
    res.json(property);
});

router.post('/', async (req, res) => {
    const property = new Property(req.body.property);
    await property.save();
    res.json(property);
});

router.put('/:id', async (req, res) => {
    const property = await Property.findByIdAndUpdate(req.params.id, {...req.body.property});
    await property.save();
    res.json(property)
});

router.delete('/:id', async (req, res) => {
    const property = await Property.findByIdAndDelete(req.params.id);
    res.json({...property, deleted: true});
});

module.exports = router;