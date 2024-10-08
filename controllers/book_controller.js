import { BookModel } from "../models/book_model.js";


export const addBook = async (req, res, next) => {
    try {
        const newBook = new BookModel(req.body)
        const books = await newBook.save()
    
        res.status(201).json(books);
    } catch (error) {
        next(error);
    }
}


export const getAllBooks = async (req, res, next) => {
    try {
        const allBooks = await BookModel.find();
    
        res.status(200).json(allBooks);
    } catch (error) {
        res.status(500).json({message:'Error fetching books', error});
    }
}


export const getBookId = async (req, res, next) => {
    try {
        const book = await BookModel.findById('Title');
        if (!book){
            res.json(book);
        } 
        else {
            return res.status(404).json({message:'Book not found'});
        }
    } catch (error) {
        res.status(500).json({message:'Error fetching book', error});   
    }
}


export const updateBook = async (req, res, next) => {
    try {
        const { id } = req.params;
    
        const book = await BookModel.findByIdAndUpdate(id, req.body);
    
        if (!book) {
          return res.status(404).send("Book not found");
        }
        return res.status(201).send("Updated successfully");
      } catch (error) {
        return res.status(500).send({ error: "Failed to find" });
      }
}


export  const deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params;
    
        const book = await BookModel.findByIdAndDelete(id);
    
        if (!book) {
          return res.status(404).send("Book not found");
        }
        return res.status(201).send("Deleted successfully");
      } catch (error) {
        return res.status(500).send({ error: "Failed to find" }); // Send an error response
      }
}