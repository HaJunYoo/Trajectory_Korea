var express = require('express');
var router = express.Router();

/* GET login page. */
module.exports.registration = function(req, res) {
    res.render('registration', { title: 'registration' });
  };

