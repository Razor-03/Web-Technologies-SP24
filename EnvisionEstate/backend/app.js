const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Running');
})

app.listen(3000, (req, res) => {
    console.log('Server running on port 3000');
})