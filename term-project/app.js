if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require('ejs-mate');
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const methodOverride = require('method-override');
const ExpressError = require("./utils/ExpressError");

mongoose.connect('mongodb://localhost:27017/envision-estate');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once("open", () => {
    console.log("Databse connected");
});


const propertyRoutes = require("./routes/properties");
const authRoutes = require("./routes/auth");
const propertyApiRoutes = require("./routes/api/properties");

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


const sessionConfig = {
    secret: "lvzc11_1351",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24* 7,
        maxAge: 1000 * 60 * 60 * 24* 7
    }
};

app.use(session(sessionConfig));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.user = req.session.user;
    next();
})


app.use("/properties", propertyRoutes);
app.use("/api/properties", propertyApiRoutes);
app.use("/", authRoutes);

app.get("/", (req, res) => {
    res.render("home/index");
});

app.post("/", (req, res) => {
    const {name, password } = req.body;
    console.log(name);
});

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!';
    res.status(statusCode).render('error', { err });
});

app.listen(3000, (req, res) => {
    console.log('Server running on port 3000');
})