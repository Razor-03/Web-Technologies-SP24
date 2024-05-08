const express = require("express");
const app = express();
const path = require("path");

const postRoutes = require("./routes/posts.js");
const authRoutes = require("./routes/auth.js");

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/posts", postRoutes);
app.use("/", authRoutes);

app.get("/", (req, res) => {
    res.send("Running");
    console.log("It works");
});

app.post("/", (req, res) => {
    const {name, password } = req.body;
    console.log(name);
});

app.listen(3000, (req, res) => {
    console.log('Server running on port 3000');
})