const jwt = require("jsonwebtoken");
const User = require("../user/user.model");
const secret = process.env.JWT_SECRET;

module.exports = {
    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @param {import('express').NextFunction} next
     */
    async getUser(req, res, next) {
        try {
            let token = req.cookies.token || req.query.token;
            if (!token) throw token;

            token = jwt.verify(token, secret);
            req.user = await User.findById(token.user);
        } catch (err) {
            req.user = null;
        }

        next();
    },
};
