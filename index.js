import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// connection to database
await mongoose.connect(process.env.MONGO_URI);

// middlewares
app.use(express.json());

// use routes
app.use(cors());

// listening
app.listen(3002, () => {
    console.log('app is listening on port 3002')
});