const Joi = require('joi');

module.exports = Joi.object({
    cook_id: Joi.number().integer().greater(0),
    label: Joi.string().min(2).max(40),
    price: Joi.number().integer().greater(0),
    ingredients: Joi.string().min(2).max(255),
});