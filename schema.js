const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().allow(" ", null),
    publishing_year: Joi.number().required(),
  }).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(0).max(10),
    comment: Joi.string().required(),
  }).required(),
});
