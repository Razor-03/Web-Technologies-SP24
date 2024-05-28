const express = require("express");
const router = express.Router();
const Property = require("../models/property");
const User = require("../models/user");
const { requireLogin, isAuthor } = require("../middleware");
const { cloudinary } = require("../cloudinary");

router.get("/profile", (req, res) => {
    const user = req.session.user;
    if (!user) {
        req.flash("error", "Please login to view profile.");
        return res.redirect("/login");
    }
    res.render("user/profile", { user });
});

router.post("/bookmark", async (req, res) => {
    const { propertyId } = req.body;
    const user = req.session.user;

    if (!user) {
        req.flash("error", "Please login to bookmark properties.");
        return res.redirect("/login");
    }

    try {
        const property = await Property.findById(propertyId);
        if (!property) {
            req.flash("error", "Property not found.");
            return res.redirect("back");
        }

        const updatedUser = await User.findByIdAndUpdate(
            user._id,
            { $addToSet: { saved: propertyId } },
            { new: true }
        );

        req.flash("success", "Property bookmarked successfully.");
        res.redirect(`/properties/${propertyId}`);
    } catch (err) {
        console.error(err);
        req.flash("error", "An error occurred while bookmarking the property.");
        res.redirect("back");
    }
});

module.exports = router;