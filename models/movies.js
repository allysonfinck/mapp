const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: String,
  year: String,
  poster: String
});

const Movies = mongoose.model('Movies', movieSchema);

module.exports = Movies;
