var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  req.session.greeting = `Hi!!!`;
  res.render('index', { title: 'Express', menu: menu });
});

router.get('/list', function(req, res, next) {
  res.render('tree', {
  title: "Лист",
  picture: "images/list.jpg",
  desc: "Листок лепесток он удачный паренек"
  }); });
  router.get('/stvol', function(req, res, next) {
    res.render('tree', {
    title: "Ствол",
    picture: "images/stvol.jpg",
    desc: "Ствол это опора дерева"
    }); });
    router.get('/koren', function(req, res, next) {
      res.render('tree', {
      title: "Корень",
      picture: "images/koren.jpg",
      desc: "Корень питает дерево"
      }); });
module.exports = router;
