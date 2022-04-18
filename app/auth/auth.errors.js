module.exports.AuthError = class AuthError extends Error {
    /**
     * @param {string} message
     * @param {number} code
     */
    constructor(message, code=401) {
        super(message);
        this.code = code;
        this.name = "AuthError";
    }
}
