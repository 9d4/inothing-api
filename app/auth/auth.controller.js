const User = require("../user/user.model");
const userValidator = require("../user/user.validator");
const { formatValidationError } = require("../shared/helpers");

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
            error: formatValidationError(error),
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
