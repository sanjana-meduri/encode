#!/usr/bin/nodejs

// -------------- load packages -------------- //
var express = require('express')
var app = express();
var path = require('path')
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

var hbs = require('hbs');
var request = require('request');

app.use('/audios', express.static(path.join(__dirname, 'audios')));
app.use('/js', express.static(path.join(__dirname, 'js')));


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );

// tell express that the view engine is hbs
app.set('view engine', 'hbs');

// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});

// -------------- express endpoint definition -------------- //
app.get('/', function(req, res){
   res.sendFile(__dirname + "/index.html"); 
});

app.post('/upload', function(req, res) {
  console.log(req.files.fileinput); // the uploaded file object
});

