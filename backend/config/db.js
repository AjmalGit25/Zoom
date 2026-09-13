import mongoose from "mongoose";
const DB_URI = process.env.MONGO_URI;
// Connect Database
const connectDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("Database connected successfully!");
    }
    catch (error) {
        console.log("Database connection failed!", error);
        throw error;
    }
};
export default connectDatabase;
//# sourceMappingURL=db.js.map