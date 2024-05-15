const bcrypt = require("bcryptjs");
const User = require('../models/user');

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    console.log(hash);
}

exports.postRegister = (req, res) => {
    const { email, password } = req.body;
}

exports.getRegister = (req, res) => {
    res.render("user/register");
}

exports.getLogin = async (req, res) => {
    // const { name, password} = req.body;
    // console.log(name, password);
    await hashPassword("12345");
    res.render("user/login");
}

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    const hash = await bcrypt.hash(password, 12);
    res.send(hash);
}

exports.logout = (req, res) => {
    res.send('Logout Route');
};