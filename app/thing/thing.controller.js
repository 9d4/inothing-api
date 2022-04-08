const { formatValidationError } = require("../shared/helpers");
const thingModel = require("./thing.model");
const { createThingValidator } = require("./thing.validator");

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

        return res.status(201).json({
            thing: {
                thingId: thing.thingId,
                name: thing.name,
            }
        });
    } catch (err) {
        console.log(err)
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
