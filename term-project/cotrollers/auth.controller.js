const bcrypt = require("bcryptjs");
const User = require('../models/user');

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    console.log(hash);
}

exports.postRegister = async (req, res) => {
    const { username, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 12);
    const newUser = new User({username, email, password: hashed});
    await newUser.save();
    res.redirect('/');
}

exports.getRegister = (req, res) => {
    res.render("user/register");
}

exports.getLogin = async (req, res) => {
    res.render("user/login");
}

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isValidPwd = await bcrypt.compare(password, user.password);

    if (isValidPwd) {
        res.redirect("/");
    } else {
        
    }
}

exports.logout = (req, res) => {
    res.send('Logout Route');
};