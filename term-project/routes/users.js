const express = require("express");
const router = express.Router();
const Property = require("../models/property");
const User = require("../models/user");
const { requireLogin, isAuthor } = require("../middleware");
const { cloudinary } = require("../cloudinary");
const sendEmail = require ('../utils/sendEmail');


router.get("/profile", async (req, res) => {
    try {
        const id = req.session.user._id;
        const user = await User.findById(id).populate("saved");
        const properties = await Property.find({ author: id });
        if (!id || !user) {
            req.flash("error", "Please login to view profile.");
            return res.redirect("/login");
        }
        res.render("user/profile", { user, properties });
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
        const property = await Property.findById(propertyId);
        if (!property) {
            req.flash("error", "Property not found.");
            return res.redirect("back");
        }

        const userRecord = await User.findById(user._id);
        const isSaved = userRecord.saved.includes(propertyId);

        if (isSaved) {
            await User.findByIdAndUpdate(
                user._id,
                { $pull: { saved: propertyId } }
            );
            req.flash("success", "Property removed from bookmarks.");
        } else {
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

router.post("/send-email", async (req, res) => {
    const { email, name, message, to } = req.body;
    try {
        await sendEmail({
            //the client email 
            to,
            //sendGrid sender id 
            from: 'nikobellyx@gmail.com',
            subject: 'Potential Customer for your property',
            text: 'Hello, I am interested in your property. Please contact me for further details.',
            html:`User <strong>${name}</strong> sent you this message: <br> ${message} <br> You can contact them at: ${email}`
        });
        res.redirect('/properties');
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

module.exports = router;