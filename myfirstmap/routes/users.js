var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'main' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});


/* GET regist page. */
router.get('/registration', function(req, res, next) {
  res.render('registration', { title: 'registration' });
});


module.exports = router;
