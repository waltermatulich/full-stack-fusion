const db = require('../config/connection');
const { User, Menu, Order, MenuItem } = require('../models');
const userSeeds = require('./userSeeds.json');
const menuSeeds = require('./menuSeeds.json');
const orderSeeds = require('./orderSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('MenuItem', 'menuItems');
    await cleanDB('User', 'users');
    await cleanDB('Order', 'orders');

    await User.create(userSeeds);

    for (let i = 0; i < menuSeeds.length; i++) {
      const { _id, customerName } = await Menu.create(menuSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: customerName },
        {
          $addToSet: {
            menus: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('All done!');
  process.exit(0);
});
