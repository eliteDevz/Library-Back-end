import { Router } from "express";
import { postAllAuthor, getAllAuthor, getSingleAuthor, updateSingleAuthor, deleteSingleAuthor } from '../controllers/author_controller.js';

export const authorRouter = Router();

authorRouter.post('/authors', postAllAuthor);
authorRouter.get('/authors', getAllAuthor);
authorRouter.get('/authors/:id', getSingleAuthor);
authorRouter.patch('/authors/:id', updateSingleAuthor);
authorRouter.delete('/authors/:id', deleteSingleAuthor);