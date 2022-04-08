const jwt = require("jsonwebtoken");
const User = require("../user/user.model");
const secret = process.env.JWT_SECRET;

/**
 * @param {import('express').Request} req
 */
function getBearerToken(req) {
    const bearerHeader = req.header("Authorization");
    if (typeof (bearerHeader) === "undefined") {
        return null
    }
    
    const bearer = bearerHeader.split(" ");
    if (bearer.length !== 2 || bearer[0].toLocaleLowerCase() !== "bearer") {
        return null
    }

    const token = bearer[1];
    return token;
}

module.exports = {
    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @param {import('express').NextFunction} next
     */
    async getUser(req, res, next) {
        try {
            let token = getBearerToken(req) || req.cookies.token || req.query.token;
            if (!token) throw token;

            token = jwt.verify(token, secret);
            req.user = await User.findById(token.user);
        } catch (err) {
            req.user = null;
        }

        next();
    },

    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @param {import('express').NextFunction} next
     */
    async authenticated(req, res, next) {
        if (req.user != null)
            return next();

        res.json({
            error: "Unauthenticated!"
        });
    }
};
