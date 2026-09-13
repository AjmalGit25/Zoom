import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDatabase from "./config/db.js";
const app = express();
// Connect Database
try {
    await connectDatabase();
}
catch (error) {
    console.log(error);
}
// Server message
app.get("/", (req, res) => {
    res.json({ message: "Backend is running!" });
});
// Run server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
//# sourceMappingURL=server.js.map