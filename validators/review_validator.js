import Joi from "joi";

export const addReviewValidator = Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required().min(1).max(100),
    userName: Joi.string().required().min(1).max(50),
})

export const updateReviewValidator = Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required().min(1).max(100),
    userName: Joi.string().required().min(1).max(50),
})