const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const menuSchema = new Schema({
  menuName: {
    type: String,
    minLength: 1,
    maxLength: 280,
    trim: true,
  },
  customerName: {
    type: String,
    required: true,
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