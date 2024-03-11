const { Schema, model } = require('mongoose');

const menuItemSchema = new Schema({
  description: {
    type: String,
    minLength: 1,
    maxLength: 280,
    trim: true,
//  required: true, It makes it so you must have description for every item in Menu
  },
   item: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
  }
});

const MenuItem = model('MenuItem', menuItemSchema);

module.exports = MenuItem;