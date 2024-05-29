const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const User = require('../../models/user');


const secret = process.env.JWT_SECRET;

function generateAuthToken(user) {
    const token = jwt.sign({ _id: user._id, name: user.name }, secret, { expiresIn: '1h' });
    return token;
}

router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    const isValidPwd = await bcrypt.compare(req.body.password, user.password);
    if (!user || !isValidPwd) {
        return res.status(400).json({ error: "Invalid email or password" });
    }
    
    const token = generateAuthToken(user);
    res.json({ token });
});

module.exports = router;