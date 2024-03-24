const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set(views, path.join(__dirname, 'views'));

const comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})