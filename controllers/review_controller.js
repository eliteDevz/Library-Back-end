import { reviewModel } from "../models/review_model.js";
import { addReviewValidator, updateReviewValidator,  } from "../validators/review_validator.js";

export const getAllReviews =async (req, res, next) => {
   try {
    const allReview = await reviewModel.find();
    res.status(201).json(allReview);
   } catch (error) {
    next(error);
   }
}


// export const getReviewById = (req,res,next) => {
//     res.status(200) .json('this is the book requested');
// }

export const getReviewById =async (req, res, next) => {
    try {
     const allReview = await reviewModel.find();
     res.status(201).json(allReview);
    } catch (error) {
     next(error);
    }
 };

// export const postAllReviews = (req,res,next) => {
//     res.status(200) .json('lets here your feedback');
// }

export const postAllReviews =async (req, res, next) => {
    try {

        const {error, value} = addReviewValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }

     const allReview = await reviewModel.create(value);
     res.status(200).json(allReview);
    } catch (error) {
     next(error);
    }
 };

// export const updateReviewById = (req,res,next) => {
//     res.status(200). json('only for readers');
// }

export const updateReviewById =async (req, res, next) => {
    try {

        const { error, value } = updateReviewValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }

     const allReview = await reviewModel.find();
     res.status(201).json(allReview);
    } catch (error) {
     next(error);
    }
 };


export const deleteReviewById = (req,res,next) => {
    res.status(200). json('this is the only comment to delete')
}