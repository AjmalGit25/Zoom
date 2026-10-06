import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDatabase from "./config/db.js";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: `${process.env.FRONTEND_URL}`,
  },
});


// Express middleware/routes
app.use(express.json());

// REST API routes
// app.use("/api/meetings", meetingRoutes);

// Socket.IO
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Server message
app.get("/", (req, res) => {
  // res.json({ message: "Backend is running!" });
  res.send("Server is running on port 5000");
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