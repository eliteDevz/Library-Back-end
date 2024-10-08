import { Router } from "express";
import { addBook, getAllBooks, getBookId, updateBook, deleteBook } from "../controllers/book_controller.js";


export const booksRouter = Router();


booksRouter.post('/books', addBook);

booksRouter.get('/books', getAllBooks);

booksRouter.get('/books/id', getBookId);

booksRouter.patch('/books/:id', updateBook);

booksRouter.delete('/books/:id', deleteBook);