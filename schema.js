const joi = require("joi");

module.exports.listingSchema = joi.object({
    list : joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        image: joi.allow(" ", null),
        price: joi.number().required().min(0),
        location: joi.string().required(),
        country: joi.string().required(),
    })
});

