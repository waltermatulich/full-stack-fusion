const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        menus: [Menu]
    }

    type Menu {
        _id: ID
        menuName: String
        customerName: String
        price: Int
        createdAt: String
    }

    type Query {
        users: [User]
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): User
    }
`;

module.exports = typeDefs;