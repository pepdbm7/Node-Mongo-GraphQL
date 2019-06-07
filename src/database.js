require("dotenv").config();
import mongoose from "mongoose";
const {
  env: { MONGO_URL }
} = process;

export const connect = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      //if the DB we define in MONGO_URL doesn't exist, mongo will create it for us
      useNewUrlParser: true
    });
    console.log(`db server running at ${MONGO_URL}`);
  } catch (err) {
    console.log(err.message);
  }
};
