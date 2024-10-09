import { Schema, model } from "mongoose";

const authorSchema = ({
    name: { type: String, required: true },
    bio: { type: String, required: true },
    sex: { type: String, enum: {values:['male', 'female']}, required: true},
    nationality: { type: String, required: true},
    createdAt: { type: Date, default: Date.now },
});

export const AuthorModel = model('author', authorSchema)