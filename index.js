import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import { authorRouter } from "./routes/author_route.js";
import { reviewRouter } from "./routes/review_route.js";
import { booksRouter } from "./routes/book_route.js";

// connection to database
await mongoose.connect(process.env.MONGO_URI);

// create an express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// serve uploaded files
app.use('/uploads', express.static('uploads'));

// use routes
app.use(authorRouter);
app.use(reviewRouter);
app.use(booksRouter);

// listening
app.listen(3002, () => {
    console.log('app is listening on port 3002')
});