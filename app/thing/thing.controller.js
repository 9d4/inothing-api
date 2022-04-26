const { formatValidationError } = require("../shared/helpers");
const thingModel = require("./thing.model");
const { createThingValidator } = require("./thing.validator");
const { ThingError } = require("./thing.errors");
const { AuthError } = require("../auth/auth.errors");

/**
 * Check if thing belongs to user
 * @param {import('express').Request} req
 * @param {string} thingId
 * @returns {boolean}
 */
const userHasThing = async (user, thingObjectId) => {
    return user.things.includes(thingObjectId);
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
module.exports.create = async (req, res, next) => {
    try {
        const { value, error } = createThingValidator.validate(req.body);
        if (error) throw error;

        const thing = await thingModel.create(value);

        // add thing to current user
        req.user.things.push(thing._id);
        await req.user.save();

        return res.status(201).json({
            thing: {
                thingId: thing.thingId,
                name: thing.name,
            }
        });
    } catch (err) {
        if (err.name = "ValidationError") {
            return res.status(422).json(formatValidationError(err));
        }

        if (err.name == "MongoServerError" && err.code == 11000)
            return res.status(409).json({
                error: formatMongoDuplicateError(err),
            });

        res.status(400).json({
            error: "Unknown error",
        });
    }
}

/**
 * Get things
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
module.exports.getAll = async (req, res) => {
    try {
        // get all things with objectId from req.user.things
        const things = await thingModel.find({
            _id: { $in: req.user.things },
        });

        return res.status(200).json({
            things: things.map(thing => ({
                thingId: thing.thingId,
                name: thing.name,
            })),
        });
    } catch (err) {
        res.status(400).json({
            error: "Unknown error",
        });
    }
}

/**
 * Get thing based on thingId
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
module.exports.get = async (req, res) => {
    try {
        const thing = await thingModel.findOne({ thingId: req.params.thingId });
        if (!thing) throw new ThingError("Thing not found");

        if (!(await userHasThing(req.user, thing._id)))
            throw new AuthError("User does not have this thing");

        return res.status(200).json({
            thing: {
                thingId: thing.thingId,
                name: thing.name,
            }
        });
    } catch (err) {
        if (err.name == "ThingError")
            return res.status(404).json({
                error: err.message,
            });

        if (err.name == "AuthError")
            return res.status(err.code).json({
                error: err.message,
            });

        res.status(400).json({
            error: "Unknown error",
        });
    }
}

/**
 * Edit thing
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
module.exports.update = async (req, res) => {
    try {
        const thing = await thingModel.findOne({ thingId: req.params.thingId });
        if (!thing) throw new ThingError("Thing not found");

        if (!(await userHasThing(req.user, thing._id)))
            throw new AuthError("User does not have this thing");

        const { error, value } = createThingValidator.validate(req.body);
        if (error) throw error

        thing.name = value.name;
        await thing.save();

        return res.status(200).json({
            thing: {
                thingId: thing.thingId,
                name: thing.name,
            }
        });
    } catch (err) {
        if (err.name === "ValidationError")
            return res.status(422).json(formatValidationError(err));

        if (err.name === "MongoServerError" && err.code == 11000)
            return res.status(409).json({
                error: formatMongoDuplicateError(err),
            });

        if (err.name === "AuthError")
            return res.status(err.code).json({
                error: err.message,
            });

        if (err.name === "ThingError")
            return res.status(err.code).json({
                error: err.message,
            });

        res.status(400).json({
            error: "Unknown error",
        });
    }
}

/**
 * Delete thing
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
module.exports.delete = async (req, res) => {
    try {
        const thing = await thingModel.findOne({ thingId: req.params.thingId });
        if (!thing) throw new ThingError("Thing not found");

        if (!(await userHasThing(req.user, thing._id)))
            throw new AuthError("User does not have this thing");

        await thing.remove();

        return res.status(200).json({
            message: "Thing deleted",
        });
    } catch (err) {
        if (err.name == "ThingError")
            return res.status(404).json({
                error: err.message,
            });

        if (err.name == "AuthError")
            return res.status(err.code).json({
                error: err.message,
            });

        res.status(400).json({
            error: "Unknown error",
        });
    }
}

