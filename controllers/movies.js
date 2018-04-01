const express = require('express');
const router = express.Router();
const Movies = require('../models/movies.js');


router.get('/', (req, res)=>{
  Movies.find({}, (err, foundMovies)=>{
    res.json(foundMovies);
  })
})

router.post('/', (req, res)=>{
  Movies.create(req.body, (err, createdMovie)=>{
    res.json(createdMovie);
  })
})

module.exports = router;
