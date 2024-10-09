import { Router } from "express";
import { addBook, getBookId, updateBook, deleteBook, getBooks } from "../controllers/book_controller.js";


export const booksRouter = Router();


booksRouter.post('/books', addBook);

booksRouter.get('/books', getBooks);

booksRouter.get('/books/:id', getBookId);


booksRouter.patch('/books/:id', updateBook);

booksRouter.delete('/books/:id', deleteBook);