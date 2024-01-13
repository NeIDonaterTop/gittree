const express = require('express');
const router = express.Router();
const Tree = require("../models/tree").Tree;

/* GET users listing. */
router.get('/', (req, res) => {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с tree');
});

/* Страница чая */
router.get('/:nick', async (req, res, next) => {
    try {
        const [tree, trees] = await Promise.all([
            Tree.findOne({ nick: req.params.nick }).exec(),
            Tree.find({}, { _id: 0, title: 1, nick: 1 }).exec()
        ]);

        if (!tree) throw new Error("Нет такой части дерева");

        res.render('tree', {
            title: tree.title,
            picture: tree.avatar,
            desc: tree.desc,
            menu:trees
        });
    } catch (err) {
         next(err);
    }
});

module.exports = router;