const bcrypt = require("bcryptjs");
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    console.log(hash);
}

exports.register = (req, res) => {
    console.log(req.body);
    res.send('Register Route');
}

exports.login = async (req, res) => {
    // const { name, password} = req.body;
    // console.log(name, password);
    await hashPassword("12345");
    res.render("user/login");
}

exports.logout = (req, res) => {
    res.send('Logout Route');
};