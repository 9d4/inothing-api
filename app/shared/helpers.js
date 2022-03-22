module.exports = {
    formatValidationError(error) {
        return error.details.reduce((result, error) => {
            result[error.path[0]] = error.message;
            return result;
        }, {});
    },
};
