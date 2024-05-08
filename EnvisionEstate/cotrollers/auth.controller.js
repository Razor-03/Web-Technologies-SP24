export const register = (req, res) => {
    console.log(req.body);
    res.send('Register Route');
}

export const login = (req, res) => {
    const { name, password} = req.body;
    console.log(name, password);
}

export const logout = (req, res) => {
    res.send('Logout Route');
};