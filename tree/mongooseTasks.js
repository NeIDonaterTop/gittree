const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const treeSchema = new mongoose.Schema( {name: String} );
treeSchema.methods.brew = function() {
    console.log(this.name + ' упал');
}
const Tree = mongoose.model('Tree', treeSchema);
const welding = new Tree({ name: 'Клен' });

welding.save()
  .then(() => welding.brew())
  .catch((err) => console.log(err));