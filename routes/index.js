var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me' });
});

module.exports = router;
