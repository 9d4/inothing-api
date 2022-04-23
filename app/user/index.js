/**
 * User Entry Point
 * other part of the Application access anything related to the Thing from here
 */

const Model = require("./user.model");
const Validator = require("./user.validator");

const user = { Model, Validator }

module.exports = user;
module.exports.default = user;
module.exports.user = user;
