import { Router } from "express";
import { postAllAuthor, getAllAuthors, getAuthorById, updateSingleAuthor, deleteSingleAuthor } from "../controllers/author_controller.js";

export const authorRouter = Router();

authorRouter.post('authors', postAllAuthor);

authorRouter.get('authors', getAllAuthors);

authorRouter.get('authors', getAuthorById);

authorRouter.patch('authors', updateSingleAuthor);

authorRouter.delete('authors', deleteSingleAuthor);