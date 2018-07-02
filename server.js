// modules
var express = require('express');
var app = express();

// set our port
var port = process.env.WSD_PORT || 3000;

// set the static files location
app.use(express.static(__dirname + '/client/public'));

require('./routes')(app); // configure our routes

// startup our app at http://localhost:3000
app.listen(port);


// expose app
exports = module.exports = app;
