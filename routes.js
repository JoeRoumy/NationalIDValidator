//imports
var express = require('express');
var router = express.Router();
var Controller = require('./controller');


//add route
router.get('/national-identity/:id', Controller.processNationalIdentity);


module.exports = router
