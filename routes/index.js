var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/aboutme', function(req, res, next) {
  res.render('AboutMe', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('Projects', { title: 'Projects' });
});

router.get('/contactme', function(req, res, next) {
  res.render('ContactMe', { title: 'Contact Me' });
});

module.exports = router;
