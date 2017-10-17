var express = require('express');
// var multer = require('multer');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require('./routes/fileroutes.js');




app.get('/', function(req, res){
  res.json({ message: 'welcome to a demo api for uploading images to a db'});
});

mongoose.connect('mongodb://')

app.use('/', routes);

app.get('/images', function(req, res){
  routes.getImages(function(err, genres){
    if(err){throw err;}
    res.json(genres);
  });
});

app.get('/images/:id', function(req, res){
  routes.getImagesById(req.params.id, function(err, genres){
    if(err){throw err;}
    res.send(genres.path)
  });
});

app.listen(2000, function(a){
  console.log("listening to port 2000")
});