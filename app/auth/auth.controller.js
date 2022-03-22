const User = require("../user/user.model.js");

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
    const { fullname, username, email, password } = req.body;

    const user = await User.create({ fullname, username, email, password });

    return res.status(201).json({
        user: {
            _id: user.id,
            fullname: user.fullname,
            username: user.username,
            email: user.email,
        },
    });
};
