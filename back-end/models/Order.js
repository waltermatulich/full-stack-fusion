const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const OrderSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'MenuItem',
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

OrderSchema.virtual("totalPrice").get(function () {
  let price = 0;
  for (let i = 0; i < this.items.length; i++) {
    price += this.items[i].price
  }
  return price
});
const Order = model('Order', OrderSchema);

module.exports = Order;