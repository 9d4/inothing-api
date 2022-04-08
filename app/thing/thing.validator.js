const Joi = require("joi");

module.exports.createThingValidator = Joi.object({
    name: Joi.string().min(3).pattern(/^[a-zA-Z0-9 ]+$/).required(),
});
