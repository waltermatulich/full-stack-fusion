const { Schema, model } = require('mongoose');

const menuSchema = new Schema({
  description: {
    type: String,
    minLength: 1,
    maxLength: 280,
    trim: true,
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

const MenuItem = model('MenuItem', menuSchema);

module.exports = MenuItem;