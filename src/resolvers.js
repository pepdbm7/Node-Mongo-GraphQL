import User from "./models/User";
import Product from "./models/Products";

export const resolvers = {
  Query: {
    greet: async (root, { name }, ctx) => {
      console.log(ctx);
      await `Hello ${name}`;
    },
    products: async () => await Product.find(),
    users: async () => await User.find()
  },

  Mutation: {
    createTask: async (_, { input }) => {
      input._id = tasks.length;
      await tasks.push(input);
      return input;
    },
    createUser: async (_, { input }) => {
      const newUser = new User(input);
      await newUser.save();
      return newUser;
    },
    updateUser: async (_, { _id, input }) => {
      await User.findByIdAndUpdate(_id, input, { new: true }); //{new: true} to get the user after being updated
    },
    deleteUser: async (_, { _id }) => {
      await User.findByIdAndDelete(_id);
    }
  }
};
