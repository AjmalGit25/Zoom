import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_URI = process.env.MONGO_URI;

// Connect Database
const connectDatabase = async () => {
  if (!DB_URI) {
    throw new Error("MONGO_URI is not defined in the environment");
  }

  try {
    await mongoose.connect(DB_URI);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log("Database connection failed!", error);
    throw error;
  }
};

export default connectDatabase;