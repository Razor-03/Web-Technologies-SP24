const express = require("express");
const router = express.Router();
const Property = require("../models/property");

router.get('/', async (req, res) => {
    const properties = await Property.find({});
    res.render('list/index', { properties });
});

module.exports = router;