const express = require("express");
const { register, getLogin, postLogin, logout } = require("../cotrollers/auth.controller.js");
const router = express.Router({ mergeParams: true});

router.use(express.json());

router.post('/register', register);

router.get('/login', getLogin);

router.post('/login', postLogin);

router.post('/logout', logout);

module.exports = router;