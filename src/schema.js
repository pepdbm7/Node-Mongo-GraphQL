import { resolvers } from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
type Query {
    greet(name: String!): String
    products: [Product]
    users: [User]
}

type User {
  _id: ID
  firstname: String!
  lastname: String!
  products: [Product]
}

type Product {
  _id: ID
  type: String!
  name: String!
  price: Int!
  image: String
  description: String!¡
}

type Mutation {
  createProduct(input: ProductInput): Product
  createUser(input: UserInput): User
  updateUser(_id: ID, input: UserInput): User
  deleteUser(_id: ID): User
}

input ProductInput {
  type: String!
  name: String!
  price: String!
  image: String
  description: String!
}

input UserInput {
  firstname: String!
  lastname: String!
}
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
