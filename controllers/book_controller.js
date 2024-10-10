import { BookModel } from "../models/book_model.js";
import { addBookvalidator } from "../validators/book_validator.js";
import multer from "multer";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); //stores files in 'uploads' folder
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, originalname); //unique name generation for each file
    }
});

const upload = multer({storage: storage });


export const addBook = async (req, res, next) => {
    try {
        
        const {error, value} = addBookvalidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        
        const newBook = new BookModel(value);
        const coverImage = req.file ? `/uploads/${req.file.filename}` : null;
        const books = await newBook.save({title,genre,author,description,publisher,publishDate,pages,language,coverImage});
    
        res.status(201).json(books);
    } catch (error) {
        next(error);
    }
}


export const getBooks = async (req, res, next) => {
    try {
        const {title, genre, author} = req.query;
        const query = {}

        if (title){
            query.title = {$regex:title, $options:'i'};
        }
        if (genre){
            query.genre = {$regex:genre, $options:'i'};
        }
        if (author){
            query.author = {$regex:author, $options:'i'};
        }

        const books = await BookModel.findAll(query).populate('author');
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({message:'Error fetching books', error});
        
    }
}


export const getBookId = async (req, res, next) => {
    try {
        const { id } = req.params;

        const book = await BookModel.findById(id).populate('author');
        if (book){
            res.status(200).json(book);
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
    
        if (book) {
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
    
        if (book) {
          return res.status(404).send("Book not found");
        }
        return res.status(201).send("Deleted successfully");
      } catch (error) {
        return res.status(500).send({ error: "Failed to find" });
      }
}