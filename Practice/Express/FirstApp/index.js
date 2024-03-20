const express = require("express");
const app = express();

// app.use((req, res) => {
//     res.send("<h1>Hello World</h1>");
// });

app.get("/", (req, res) => {
    res.send("<h1>Root route</h1>");
});

app.get(`/r/:subreddit`, (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get(`/r/:subreddit/:postId`, (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})