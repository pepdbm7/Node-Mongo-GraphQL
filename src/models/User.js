import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: String,
  products: [
    {
      ref: "Product"
    }
  ]
});

export default model("User", userSchema);
