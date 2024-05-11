const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require('ejs-mate');
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/envision-estate');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once("open", () => {
    console.log("Databse connected");
});


const postRoutes = require("./routes/posts");
const authRoutes = require("./routes/auth");

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/list", postRoutes);
app.use("/", authRoutes);

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/", (req, res) => {
    const {name, password } = req.body;
    console.log(name);
});

app.listen(3000, (req, res) => {
    console.log('Server running on port 3000');
})