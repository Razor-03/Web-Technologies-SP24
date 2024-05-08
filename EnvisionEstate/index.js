import express from "express"; 
const app = express();

import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/", authRoutes);

app.get("/", (req, res) => {
    res.send("Running");
    console.log("It works");
});

app.post("/", (req, res) => {
    const {name, password } = req.body;
    // res.send("Running");
    // console.log("It works");
    console.log(name);
});

app.listen(3000, (req, res) => {
    console.log('Server running on port 3000');
})