const { User, MenuItem, Menu, Order } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
    Query: {
        // Resolver to fetch all users
        users: async () => {
            try {
                return User.find();
            } catch (error) {
                throw new Error("Failed to fetch users");
            }
        },
        menuItems: async () => {
            try {
                return MenuItem.find();
            } catch (error) {
                throw new Error("Failed to fetch users");
            }
        },
        orders: async (parent, { userId }) => {
            return Order.findOne({_id:userId})
        }
    },
    Mutation: {
        // // Resolver to create a new user
        // createUser: async (parent, { username, email, password }) => {
        //     try {
        //         const user = await User.create({ username, email, password });
        //         return user;
        //     } catch (error) {
        //         throw new Error("Failed to create user");
        //     }
        // },
        // Resolver to sign in a user
        signIn: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Invalid email or password');
            }

            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw new AuthenticationError('Invalid email or password');
            }

            const token = signToken(user);
            return { token, user };
        },
        // // Resolver to add an order
        // addOrder: async (parent, { userId, orderData }, context) => {
        //     if (context.user) {
        //         return User.findOneAndUpdate(
        //             { _id: userId },
        //             { $push: { orders: orderData } },
        //             { new: true }
        //         );
        //     }
        //     throw new AuthenticationError('You must be logged in to add an order');
        // },
        // // Resolver to delete an order
        // deleteOrder: async (parent, { userId, orderId }, context) => {
        //     if (context.user) {
        //         return User.findOneAndUpdate(
        //             { _id: userId },
        //             { $pull: { orders: { orderId } } },
        //             { new: true }
        //         );
        //     }
        //     throw new AuthenticationError('You must be logged in to delete an order');
        // },
        // Resolver to place an order
        // placeOrder: async (parent, { userId }, context) => {
        //     if (context.user) {
        //         const user = await User.findById(userId).populate('orders.items');

        //         if (!user) {
        //             throw new Error('User not found');
        //         }

        //         let total = 0;
        //         user.orders.forEach(order => {
        //             order.items.forEach(item => {
        //                 total += item.price;
        //             });
        //         });

        //         const newOrder = {
        //             items: user.orders.items,
        //             total,
        //             status: "Manny's munchies are going to be munching!"
        //         };

        //         await User.findOneAndUpdate(
        //             { _id: userId },
        //             { $push: { orders: newOrder }, $set: { orders: [] } },
        //             { new: true }
        //         );

        //         return user.orders;
        //     }
        //     throw new AuthenticationError('You must be logged in to place an order');
        // },
    }
};

module.exports = resolvers;
