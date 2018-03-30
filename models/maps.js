const mongoose = require('mongoose');

const mapSchema = new mongoose.Schema({
  name: String,
  description: String,
  lat: Number,
  long: Number
});

const Maps = mongoose.model('Map', mapSchema);

module.exports = Maps;
