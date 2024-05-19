const express = require("express");
const { getRegister, postRegister, getLogin, postLogin, logout } = require("../cotrollers/auth.controller.js");
const router = express.Router({ mergeParams: true});
const { storeReturnTo } = require("../middleware.js");

router.use(express.json());

router.post('/register', postRegister);

router.get('/register', getRegister);

router.get('/login', getLogin);

router.post('/login', storeReturnTo, postLogin);

router.post('/logout', logout);

module.exports = router;