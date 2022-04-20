module.exports.ThingError = class ThingError extends Error {
    constructor(message, code=404) {
        super(message);
        this.name = "ThingError";
        this.code = code;
    }
}
