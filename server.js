const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');


app.use(express.json());
app.use(express.static('public'));

const mapsController = require('./controllers/maps.js');
app.use('/maps', mapsController);

mongoose.connect('mongodb://localhost:27017/mapd');
mongoose.connection.once('open', ()=>{
  console.log('connected to mongod');
})


app.listen(port, ()=>{
  console.log('listening');
})
