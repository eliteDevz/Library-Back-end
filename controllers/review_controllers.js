import {reviewModel} from "../models/review_model.js"

export const getAllReviews =async (req,res,next) => {
   try {
    const allReview = new reviewModel.find();
    res.status(200).json(allReview)
   } catch (error) {
    next(error);
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
