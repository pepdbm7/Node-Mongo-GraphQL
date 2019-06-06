require("dotenv").config();
import mongoose from "mongoose";
const {
  env: { MONGO_URL }
} = process;

export const connect = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      //or however we want to name our DB
      useNewUrlParser: true
    });
    console.log(`db server running at ${MONGO_URL}`);
  } catch (err) {
    console.log(err.message);
  }
};
