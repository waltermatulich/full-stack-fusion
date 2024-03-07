const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
    Query: {
        users: async () => {
            try {
                return await User.find();
            } catch (error) {
                throw new Error("Failed to fetch users");
            }
        },
    },
    Mutation: {
        createUser: async (parent, { username, email, password }) => {
            try {
                const user = await User.create({ username, email, password });
                return user;
            } catch (error) {
                throw new Error("Failed to create user");
            }
        },
    }
}

module.exports = resolvers;