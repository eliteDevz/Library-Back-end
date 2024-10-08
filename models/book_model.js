import { Schema, model, Types } from "mongoose";


const bookSchema = new Schema ({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    author:{type: Types.ObjectId, ref:'Author'},
    description: {type: String, required: true},
    publisher: {type: String, required: true},
    publishDate: {type: String, required: true},
    pages: {type: Number, required: true},
    language: {type: Number, required: true},
})


export const BookModel = model('Book', bookSchema);