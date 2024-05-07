const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('post route here');
})

module.exports = router;