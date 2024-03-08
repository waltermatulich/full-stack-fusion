const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        menus: [Menu]
    }

    type MenuItem {
        _id: ID
        item: String
        price: Int
    }

    type Query {
        users: [User]
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): User
    }
`;

module.exports = typeDefs;