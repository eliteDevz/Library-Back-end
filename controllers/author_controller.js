import { AuthorModel } from '../models/author_model.js';
import { authorRouter } from '../routes/author_routes.js';

// Create all AUthors by post
export const postAllAuthor = async (req, res, next) => {
    try {
        const author = new AuthorModel(req.body);
        await author.save();
        console.log(req.body);
        res.status(201).json({ message: 'Author created successfully', author });
    } catch (error) {
        next(error);
    }
};

// Get all authors
export const getAllAuthors = async (req, res, next) => {
    try {
        const author = new AuthorModel(req.body);
        await author.find();
        console.log(req.body);
        res.status(201).json({ message: 'Author added successfully', author });
    } catch (error) {
        next(error);
    }
};



// Get a single author by ID
export const getAuthorById = async (req, res, next) => {
    try {
        const author = new AuthorModel(req.body);
        await author.find();
        console.log(req.body);
        res.status(201).json({ message: 'Author added single successfully', author });
    } catch (error) {
        next(error);
    }
};

// Update an author by ID
export const updateSingleAuthor = async (req, res, next) => {
    try {
        const author = new AuthorModel(req.body);
        await author.add();
        console.log(req.body);
        res.status(201).json({ message: 'Author updated successfully', author });
    } catch (error) {
        next(error);
    }
};

// Delete an author by ID

export const deleteSingleAuthor = async (req, res, next) => {
    try {
        const author = new AuthorModel(req.body);
        await author.remove();
        console.log(req.body);
        res.status(201).json({ message: 'Author created successfully', author });
    } catch (error) {
        next(error);
    }
};