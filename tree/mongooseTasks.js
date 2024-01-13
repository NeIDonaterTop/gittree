const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Tree = mongoose.model('Tree', { name: String });
const welding = new Tree({ name: 'Лист' });

welding.save()
  .then(() => console.log('Клен'))
  .catch((err) => console.log(err));