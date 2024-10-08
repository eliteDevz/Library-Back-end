import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { reviewRouter } from "./routes/review_route.js";

// connection to database
await mongoose.connect(process.env.MONGO_URI);

// create an express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// use routes


// listening
app.listen(3002, () => {
    console.log('app is listening on port 3002')
});