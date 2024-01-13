var express = require('express');
var router = express.Router();
var Tree = require("../models/tree").Tree;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с tree');
  });

router.get("/:nick", async (req, res, next) => {
  try {
    const tree = await Tree.findOne({ nick: req.params.nick });
    console.log(tree);
    if (!tree) {
      throw new Error("Нет такой части у дерева");
    }
    res.render('tree', {
      title: tree.title,
      picture: tree.avatar,
      desc: tree.desc
    });
  } catch (err) {
    next(err);
  }
});       
module.exports = router;