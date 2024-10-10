import { AuthorModel } from "../models/author_model.js";
import { addAuthorValidator, updateAuthorValidator } from "../validators/author_validator.js";

// Create all AUthors by post
export const postAllAuthor = async (req, res, next) => {
    try {

        const {error, value} = addAuthorValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }

        const authors = await AuthorModel.create(value);
        res.status(201).json(authors);
    } catch (error) {
        next(error);
    }
};


// Create all Authors by get
export const getAllAuthor = async (req, res, next) => {
    try {
        const authors = await AuthorModel.find();
        res.status(200).json(authors);
    } catch (error) {
        next(error);
    }
};

// Create all AUthors by get
export const getSingleAuthor = async (req, res, next) => {
    try {
        const authors = await AuthorModel.findById(req.params.id, { new: true });
        res.status(200).json(authors);
    } catch (error) {
        next(error);
    }
};


// Create all AUthors by update
export const updateSingleAuthor = async (req, res, next) => {
    try {

        const { error, value } = updateAuthorValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }

        const authors = await AuthorModel.findByIdAndUpdate(req.params.id,{new:true});
        res.status(201).json(authors);
    } catch (error) {
        next(error);
    }
};


// Create all AUthors by delete
export const deleteSingleAuthor = async (req, res, next) => {
    try {
        const authors = await AuthorModel.findByIdAndDelete(req.params.id);
        res.status(204).json(authors);
    } catch (error) {
        next(error);
    }
};