var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
router.get('/', function(req, res, next) {
res.send('<h1>Это экран для списка частей дерева</h1>');
});
router.get("/:nick", function(req, res, next) {
db.query(`SELECT * FROM trees WHERE trees.nick = '${req.params.nick}'`, (err, trees) => {
if(err) {
console.log(err);
if(err) return next(err)
} else {
if(trees.length == 0) return next(new Error("Нет такой части дерева"))
var tree = trees[0];
res.render('tree', {
title: tree.title,
picture: tree.avatar,
desc: tree.about
})
}
})
});
module.exports = router;