const { User } = require("../models");
const { signToken, authenticationError } = require("../utils/auth");

const resolvers = {
    Query: {
        users: async(parent, args) => {
            return await User.find({

            })
        }
    },
    // Mutation: {

    // }
}

module.exports = resolvers;