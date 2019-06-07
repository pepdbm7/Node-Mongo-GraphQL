import User from "./models/User";
import { products } from "./data";

export const resolvers = {
  Query: {
    greet: async (root, { name }, ctx) => {
      console.log(ctx);
      await `Hello ${name}`;
    },
    products: () => products, //imported from data we've created as an example list
    users: async () => await User.find()
  },

  Mutation: {
    createProduct: async (_, { input }) => {
      input._id = products.length;
      await products.push(input);
      return input;
    },
    createUser: async (_, { input }) => {
      const newUser = new User(input);
      await newUser.save();
      return newUser;
    },
    updateUser: async (_, { _id, input }) => {
      //we need the id of the item, and an object with the keys we want to change, and their new values!
      await User.findByIdAndUpdate(_id, input, { new: true }); //{new: true} to get the user after being updated
    },
    deleteUser: async (_, { _id }) => {
      await User.findByIdAndDelete(_id);
    }
  }
};
