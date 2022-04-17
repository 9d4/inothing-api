const { formatValidationError } = require("../shared/helpers");
const thingModel = require("./thing.model");
const { createThingValidator } = require("./thing.validator");
const { ThingError } = require("./thing.errors");

/**
 * Get thing based on thingId
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
module.exports.get = async (req, res) => {
    try {
        const thing = await thingModel.findOne({ thingId: req.params.thingId });
        if (!thing) throw new ThingError("Thing not found");

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

        res.status(400).json({
            error: "Unkwon error",
        });
    }
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
            error: "Unkwon error",
        });
    }
}
