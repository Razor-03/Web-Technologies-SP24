const express = require("express");
const { getRegister, postRegister, getLogin, postLogin, logout } = require("../cotrollers/auth.controller.js");
const router = express.Router({ mergeParams: true});
const { storeReturnTo } = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({ storage });

router.use(express.json());

router.post('/register', upload.single("avatar"), postRegister);

router.get('/register', getRegister);

router.get('/login', getLogin);

router.post('/login', storeReturnTo, postLogin);

router.post('/logout', logout);

module.exports = router;