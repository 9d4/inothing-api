const jwt = require("jsonwebtoken");
const User = require("../user/user.model");
const userValidator = require("../user/user.validator");
const {
    formatValidationError,
    formatMongoDuplicateError,
} = require("../shared/helpers");
const secret = process.env.JWT_SECRET;
const { newUser: rmqNewUser, setVhostPermission } = require("../rbmqapi/rbmqapi");

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
module.exports.login = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = await User.login(username || email, password);

        const payload = { user: user._id };
        const token = jwt.sign(payload, secret, {
            expiresIn: 24 * 60 * 60,
        });

        res.cookie("token", token, { maxAge: 24 * 60 * 60 * 1000 });
        res.status(201).json({
            user: {
                _id: user.id,
                fullname: user.fullname,
                username: user.username,
                email: user.email,
            },
            token,
        });
    } catch (err) {
        res.status(400).json({ err });
    }
};
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
module.exports.logout = (req, res) => {
    res.clearCookie();
    res.sendStatus(204);
};
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
module.exports.register = async (req, res) => {
    try {
        const { value, error } = userValidator.validate(req.body);

        if (error) throw error;

        const user = await User.create(value);

        // create user in RabbitMQ
        const rmqRes = await rmqNewUser(user.username, user.rmqpassword);

        if (rmqRes.status !== 201) {
            // destroy user immediately
            await User.findByIdAndDelete(user.id);

            // throw unknown error
            throw new Error("Unknown error");
        }

        // allow rmq user permission against default vhost
        await setVhostPermission(null, user.username, { configure: ".*", read: ".*", write: ".*" });

        res.status(201).json({
            user: {
                _id: user.id,
                fullname: user.fullname,
                username: user.username,
                email: user.email,
            },
        });
    } catch (err) {
        if (err.name == "ValidationError")
            return res.status(422).json({
                error: formatValidationError(err),
            });

        if (err.name == "MongoServerError" && err.code == 11000)
            return res.status(409).json({
                error: formatMongoDuplicateError(err),
            });

        res.status(400).json({
            error: "Unknown error",
        });
    }
};
