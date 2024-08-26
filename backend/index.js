import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";

import { connectToDatabase } from "./db/connectToDatabase.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //to get the proper json from req.body
app.use(cookieParser()); // to parse incoming cookies from req.cookies.[cookieName]

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
    connectToDatabase();
    console.log("Server is running on port: " + PORT);
});