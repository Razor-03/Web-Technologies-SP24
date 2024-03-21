const express = require('express');
const app = express();
const path = require("path")

app.set('view engine', 'ejs');
app.set(path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit })
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});