import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDatabase from "./config/db.js";

const app = express();



// Server message
app.get("/", (req, res) => {
  // res.json({ message: "Backend is running!" });
  res.send("Server running on port 5000");
});


try {
  // Connect Database
  await connectDatabase();

  // Run server
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
} catch (error) {
  console.error("Failed to start server:", error);
  process.exit(1);
}

