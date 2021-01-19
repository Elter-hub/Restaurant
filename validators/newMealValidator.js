const Joi = require('joi');

module.exports = Joi.object({
    cook_id: Joi.number().integer(),
    label: Joi.string().min(2).max(40),
    price: Joi.number().integer(),
    ingredients: Joi.string().min(2).max(255),
});