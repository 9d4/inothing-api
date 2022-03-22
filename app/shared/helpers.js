module.exports = {
    formatValidationError(error) {
        return error.details.reduce((result, error) => {
            result[error.path[0]] = error.message;
            return result;
        }, {});
    },
    formatMongoDuplicateError(error) {
        return {
            username: error.keyValue.username ? "Username already taken" : undefined,
            email: error.keyValue.email ? "Email already registered" : undefined,
        };
    },
};
