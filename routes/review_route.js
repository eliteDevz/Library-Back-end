import { Router } from "express";
import { getAllReviews,getReviewById,postAllReviews,updateReviewById,deleteReviewById } from "../controllers/review_controllers.js";

export const reviewRouter = Router();

reviewRouter.post('reviews',postAllReviews);
reviewRouter.get('reviews',getAllReviews);
reviewRouter.getId('reviews',getReviewById);
reviewRouter.udateId('reviews',updateReviewById);
reviewRouter.udateId('review',deleteReviewById);
