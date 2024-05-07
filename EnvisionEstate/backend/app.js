const express = require('express');
const app = express();

const postRoutes = require('./routes/post');

app.use('/route', postRoutes);

app.get('/', (req, res) => {
    res.send('Running');
})

app.listen(3000, (req, res) => {
    console.log('Server running on port 3000');
})