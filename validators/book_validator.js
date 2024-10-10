import Joi from "joi";

export const addBookvalidator = Joi.object({
    title:Joi.string().required().min(3).max(100),
    genre:Joi.string().required().min(3).max(100),
    author:Joi.string().required().min(3).max(200),
    description:Joi.string().required().min(3).max(500),
    publisher:Joi.string().required().min(3).max(100),
    publishDate:Joi.string().required(),
    pages:Joi.number().required(),
    language:Joi.string().required().min(3).max(100),
    coverImage:Joi.string().required(),
})

export const updateBookvalidator = Joi.object({
    title:Joi.string().min(3).max(100),
    genre:Joi.string().min(3).max(100),
    author:Joi.string().min(3).max(200),
    description:Joi.string().min(3).max(500),
    publisher:Joi.string().min(3).max(100),
    publishDate:Joi.string(),
    pages:Joi.number(),
    language:Joi.string().min(2).max(100),
    coverImage:Joi.string()
})