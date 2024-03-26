const express = requier('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'views')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});