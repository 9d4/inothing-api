const Joi = require("joi");
const User = require("./user.model");

const schema = Joi.object({
    fullname: Joi.string()
        .pattern(/^[a-zA-Z0-9]+$/)
        .required(),
    username: Joi.string()
        .regex(/^[a-zA-Z0-9\-\_]+$/)
        .required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
}).options({
    abortEarly: false,
    stripUnknown: true,
    errors: { wrap: { label: "`" } },
});

module.exports = schema;
