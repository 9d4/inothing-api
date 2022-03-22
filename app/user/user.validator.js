const Joi = require("joi");
const User = require("./user.model");

const schema = Joi.object({
    fullname: Joi.string()
        .pattern(/^[a-zA-Z0-9]+$/)
        .required(),
    username: Joi.string()
        .regex(/^[a-zA-Z0-9\-\_]+$/)
        .required()
        .custom((value, helper) => {
            if (User.exists({ username: value }).exec()) {
                throw new Error("Username already taken");
            }
            return value;
        }),
    email: Joi.string()
        .email()
        .required()
        .custom((value, helper) => {
            if (User.exists({ email: value }).exec()) {
                throw new Error("Email already registered");
            }
            return value;
        }),
    password: Joi.string().min(8).required(),
}).options({
    abortEarly: false,
    stripUnknown: true,
    errors: { wrap: { label: "`" } },
});

module.exports = schema;
