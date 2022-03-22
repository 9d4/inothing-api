const User = require("../user/user.model.js");
const userValidator = require("../user/user.validator");

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
module.exports.login = (req, res) => {};
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
module.exports.logout = (req, res) => {};
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
module.exports.register = async (req, res) => {
    const { value, error } = userValidator.validate(req.body);

    if (error)
        return res.status(422).json({
            errors: error.details.map((detail) => detail.message),
        });

    const user = await User.create(value);

    return res.status(201).json({
        user: {
            _id: user.id,
            fullname: user.fullname,
            username: user.username,
            email: user.email,
        },
    });
};
