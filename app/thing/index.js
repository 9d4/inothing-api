/**
 * Thing Entry Point
 * other part of the Application access anything related to the Thing from here
 */

const controller = require('./thing.controller');
const error = require('./thing.errors');
const model = require('./thing.model');
const schema = require('./thing.schema');
const validator = require('./thing.validator');

const thing = {
    Controller: controller,
    Error: error,
    Model: model,
    Schema: schema,
    Validator: validator,
}

module.exports = thing;
module.exports.default = thing;
module.exports.thing = thing;
