const { Schema, model } = require('mongoose');

const menuSchema = new Schema({
    item: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    },
});

const Menu = model('Menu', menuSchema);

module.exports = Menu;