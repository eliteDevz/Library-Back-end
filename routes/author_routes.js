import { Router } from "express";
import { postAllAuthor, getAllAuthors, getAuthorById, updateSingleAuthor, deleteSingleAuthor } from "../controllers/author_controller.js";

export const authorRouter = Router();
// import { Router } from "express";

authorRouter.post('authors', postAllAuthor);

authorRouter.get('authors', getAllAuthors);

authorRouter.get('authors/:id', getAuthorById);

authorRouter.patch('authors/:id', updateSingleAuthor);

authorRouter.delete('authors/:id', deleteSingleAuthor);