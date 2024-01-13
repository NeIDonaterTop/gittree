const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test1');

const Tree = require("./models/tree").Tree;

const tree = new Tree({
  title: "Лист Клена",
  nick: "klenlist"
});

console.log(tree);

tree.save()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
  