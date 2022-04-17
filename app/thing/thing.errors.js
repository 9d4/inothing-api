module.exports.ThingError = class ThingError extends Error {
    constructor(message) {
        super(message);
        this.name = "ThingError";
    }
}
