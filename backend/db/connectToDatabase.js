import mongoose from "mongoose";

export const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.log("Error connecting to MongoDB " + error.message);
        process.exit(1) //0 success 1 fail
    }
}