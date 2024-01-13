const express = require('express');
const router = express.Router();
const Tree = require("../models/tree").Tree;

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Express', counter:req.session.counter });
  } catch (err) {
    next(err);
  }
});
router.get('/logreg', (req, res, next) => {
  res.render('logreg', { title: 'Вход' });
});
router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
});
module.exports = router;