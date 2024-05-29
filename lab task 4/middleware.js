const Property = require("./models/property");

module.exports.requireLogin = (req, res, next) => {
    if (!req.session.user) {
        req.session.returnTo = req.originalUrl;
        req.flash("error", "You must be logged in!")
        return res.redirect("/login");
    }
    next();
}

module.exports.storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}

module.exports.isAuthor = async (req, res, next) => {
    const {id} = req.params;
    const property = await Property.findById(id);
    if (!req.session.user || !property.author.equals(req.session.user._id)) {
        req.flash("error", "You do not have permimssion to do that!");
        return res.redirect(`/properties/${id}`);
    }
    next();
}