import { Router } from "express";
import { getAllReviews,getReviewById,postAllReviews,updateReviewById,deleteReviewById } from "../controllers/review_controller.js";

export const reviewRouter = Router();

reviewRouter.post('/reviews', postAllReviews);
reviewRouter.get('/reviews', getAllReviews);
reviewRouter.get('/reviews/id', getReviewById);
reviewRouter.patch('/reviews/id', updateReviewById);
reviewRouter.delete('/reviews/:id', deleteReviewById);