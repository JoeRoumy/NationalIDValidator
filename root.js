//imports
var express = require('express');
var router = require('./routes');


//initializations
var app = express();
app.use(router);


//start
var port = 10000
app.listen(port,function(){console.log("Up on port "+port+"..");})
