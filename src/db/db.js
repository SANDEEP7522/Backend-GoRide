import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

function connectDB() {
  return mongoose.connect(MONGO_URL).then(() => {
    console.log("Database connected successfully");
  }).catch(error => {
    console.log('Database connection failed', error);
  });
}

export default connectDB;

