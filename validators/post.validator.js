const Joi = require('joi');

const postSchema = Joi.object({
    title: Joi.string().min(5).required(),
    content: Joi.string().min(1).required(),
    tags: Joi.array().items(Joi.string()).min(2).max(4).required()
});

module.exports = postSchema;