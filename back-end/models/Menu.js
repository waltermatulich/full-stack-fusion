const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const menuSchema = new Schema({
  menuName: {
    type: String,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  price: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Menu = model('Menu', menuSchema);

module.exports = Menu;