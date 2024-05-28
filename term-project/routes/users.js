const express = require("express");
const router = express.Router();
const Property = require("../models/property");
const User = require("../models/user");
const { requireLogin, isAuthor } = require("../middleware");
const { cloudinary } = require("../cloudinary");

router.get("/profile", async (req, res) => {
    try {
        const id = req.session.user._id;
        const user = await User.findById(id).populate("saved");
        if (!id) {
            req.flash("error", "Please login to view profile.");
            return res.redirect("/login");
        }
        res.render("user/profile", { user });
    } catch(err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

router.post("/bookmark", async (req, res) => {
    const { propertyId } = req.body;
    const user = req.session.user;

    if (!user) {
        req.flash("error", "Please login to bookmark properties.");
        return res.redirect("/login");
    }

    try {
        // Ensure the property exists
        const property = await Property.findById(propertyId);
        if (!property) {
            req.flash("error", "Property not found.");
            return res.redirect("back");
        }

        // Check if the property is already saved
        const userRecord = await User.findById(user._id);
        const isSaved = userRecord.saved.includes(propertyId);

        if (isSaved) {
            // If the property is already saved, remove it from the saved list
            await User.findByIdAndUpdate(
                user._id,
                { $pull: { saved: propertyId } }
            );
            req.flash("success", "Property removed from bookmarks.");
        } else {
            // If the property is not saved, add it to the saved list
            await User.findByIdAndUpdate(
                user._id,
                { $addToSet: { saved: propertyId } },
                { new: true }
            );
            req.flash("success", "Property bookmarked successfully.");
        }

        res.redirect(`/properties/${propertyId}`);
    } catch (err) {
        console.error(err);
        req.flash("error", "An error occurred while bookmarking the property.");
        res.redirect("back");
    }
});

module.exports = router;