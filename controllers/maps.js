const express = require('express');
const router = express.Router();
const Maps = require('../models/maps.js');


router.get('/', (req, res)=>{
  Maps.find({}, (err, foundMaps)=>{
    res.json(foundMaps);
  })
})

router.post('/', (req, res)=>{
  Maps.create(req.body, (err, createdMap)=>{
    res.json(createdMap);
  })
})

module.exports = router;
