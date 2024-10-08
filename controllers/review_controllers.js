import { Schema} from "mongoose";

import {Book, reviewModel} from "../models/review_model.js"

export const getAllReviews =async (req,res,next) => {
   try {
    const review = new reviewModel(req.body)
    await review.save();
    console.log(req.body);
     res.status(200).json('these are all the books');
   } catch (error) {
    
   }
}


export const getReviewById = (req,res,next) => {
    res.status(200) .json('this is the book requested');
}

export const postAllReviews = (req,res,next) => {
    res.status(200) .json('lets here your feedback');
}

export const updateReviewById = (req,res,next) => {
    res.status(200). json('only for readers');
}
export const deleteReviewById = (req,res,next) => {
    res.status(200). json('this is the only comment to delete')
}
