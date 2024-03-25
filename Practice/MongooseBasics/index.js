const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(() => {
    console.log('Connected to the database')
})
.catch((err) => {
    console.log('Error connecting to the database')
});


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    rating: Number,
});

const Movie = mongoose.model('Movie', movieSchema);
const movie = new Movie({
    title: "The Dark Knight",
    year: 2008,
    rating: 9.5,
});

movie.save().then(() => {
    console.log('Movie saved');
});