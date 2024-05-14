const express = require("express");
const { register, login, logout } = require("../cotrollers/auth.controller.js");
const router = express.Router({ mergeParams: true});

router.use(express.json());

router.post('/register', register);

router.get('/login', login);

router.post('/logout', logout);

module.exports = router;