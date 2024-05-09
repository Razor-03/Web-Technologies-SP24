const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('posts/index');
});

router.get('/new', (req, res) => {
    res.render('list/edit');
});

module.exports = router;