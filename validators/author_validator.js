import Joi from "joi";

export const addAuthorValidator = Joi.object({
    name:Joi.string().required().min(3).max(100),
    bio:Joi.string().required().min(3).max(100),
    sex:Joi.string().required().min(3).max(100),
    nationality:Joi.string().required().min(3).max(100),
})

export const updateAuthorValidator = Joi.object({
    name: Joi.string().min(3).max(100),
    bio: Joi.string().min(3).max(100),
    sex: Joi.string().min(3).max(100),
    nationality: Joi.string().required().min(3).max(100),
})