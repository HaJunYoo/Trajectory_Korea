var express = require('express');
var router = express.Router();

/* GET login page. */
module.exports.login = function(req, res) {
    res.render('login', { title: 'login' });
  };

