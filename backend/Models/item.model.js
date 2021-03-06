const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true}
}, {
  timestamps: true,
})

// Virtual for items URL
itemSchema
.virtual('url')
.get(function () {
  return '/catalog/item/' + this._id;
});
const item = mongoose.model('item', itemSchema);

//Export model
module.exports = mongoose.model('Item', itemSchema);
