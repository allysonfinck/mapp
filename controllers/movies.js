const express = require('express');
const router = express.Router();
const Movies = require('../models/movies.js');


router.get('/', (req, res)=>{
  Movies.find({}, (err, foundMaps)=>{
    res.json(foundMaps);
  })
})

router.post('/', (req, res)=>{
  Movies.create(req.body, (err, createdMap)=>{
    res.json(createdMap);
  })
})

module.exports = router;
