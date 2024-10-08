import { Schema, model } from "mongoose";

const authorSchema = ({
    name: { type: String, required: true },
    bio: { type: String, required: true },
    nationality: { type: String },
    books: { type: Schema.Types.ObjectId, ref: 'Book'},
    createdAt: { type: Date, default: Date.now },
});

export const AuthorModel = model('Author', authorSchema);