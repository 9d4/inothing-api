/**
 * Thing Entry Point
 * other part of the Application access anything related to the Thing from here
 */

const Controller = require('./thing.controller');
const Error = require('./thing.errors');
const Model = require('./thing.model');
const Schema = require('./thing.schema');
const Validator = require('./thing.validator');

const thing = { Controller, Error, Model, Schema, Validator }

module.exports = thing;
module.exports.default = thing;
module.exports.thing = thing;
