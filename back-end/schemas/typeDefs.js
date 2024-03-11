const typeDefs = `  
  type Auth {
    token: ID
    user: User
  }

  type User { 
    _id: ID
    username: String
    email: String
    password: String
    menus: [MenuItem]
    orders: [Order]
  }

  type MenuItem {
    _id: ID
    description: String
    item: String
    price: Int
  }

  type Order {
    _id: ID
    createdAt: String
    items: [MenuItem]
    total: Int
    status: String
  }

  type Menu {
    _id: ID
    item: String
    description: String
    price: Int
    image: String
    link: String
  }
  
  input MenuItemInput {
    itemId: ID!
    quantity: Int!
  }

  type Query {
    users: [User]
    menuItems: [MenuItem]
    orders(userId: ID!): [Order]
  }

  type Mutation {
      createUser(username: String!, email: String!, password: String!): User
      signIn(email: String!, password: String!): Auth
      addOrder(userId: ID!, orderData: [MenuItemInput]!): Order
      deleteOrder(userId: ID!, orderId: ID!): Order
      placeOrder(userId: ID!): Order
    }
`;

module.exports = typeDefs;


// type Mutation {
//   createUser(username: String!, email: String!, password: String!): User
//   signIn(email: String!, password: String!): Auth
//   addOrder(userId: ID!, orderData: [MenuItemInput]!): Order
//   deleteOrder(userId: ID!, orderId: ID!): Order
//   placeOrder(userId: ID!): Order
// }