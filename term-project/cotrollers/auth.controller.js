const bcrypt = require("bcryptjs");
const hashPassword = async () => {
    const salt = await bcrypt.genSalt(10);
    return salt;
}

exports.register = (req, res) => {
    console.log(req.body);
    res.send('Register Route');
}

exports.login = async (req, res) => {
    // const { name, password} = req.body;
    // console.log(name, password);
    const salted = await hashPassword();
    console.log(salted);
    res.render("user/login");
}

exports.logout = (req, res) => {
    res.send('Logout Route');
};