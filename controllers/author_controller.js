import { Author } from '../models/author_model.js';
import { authorRouter } from '../routes/author_routes.js';

// Create all AUthors by post
export const postAllAuthor = async (req, res, next) => {
    try {
        const author = new authorModel(req.body);
        await author.save();
        console.log(req.body);
        res.status(201).json('author name not showing');
    } catch (error) {
       next(error); 
    }
};

// export const postAllAuthors = async (req, res) => {
//     const author = new Author(req.body)
//     const authors = await author.save()
//     res.status(201).json(authors);
// }

// Get all authors
export const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json('author name showing');
    } catch (error) {
        res.status(201).json({ message: error.message });
    }
};

// Get a single author by ID
export const getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (!author) return res.status(404).json({ message: 'Author not found' });
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an author by ID
export const updateSingleAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!author) return res.status(404).json({ message: 'Author not found' });
        res.status(200).json(author);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an author by ID
export const deleteSingleAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        if (!author) return res.status(404).json({ message: 'Author not found' });
        res.status(200).json({ message: 'Author deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
