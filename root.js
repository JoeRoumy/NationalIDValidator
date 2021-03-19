//imports
var express = require('express');
var router = require('./routes');


//initializations
var app = express();
app.use(router);


//start
var port = 10000
var server = app.listen(port,function(){console.log("Up on port "+port+"..");})

module.exports = server