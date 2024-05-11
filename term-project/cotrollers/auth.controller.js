exports.register = (req, res) => {
    console.log(req.body);
    res.send('Register Route');
}

exports.login = (req, res) => {
    const { name, password} = req.body;
    console.log(name, password);
}

exports.logout = (req, res) => {
    res.send('Logout Route');
};