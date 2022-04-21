/**
 * Thing Entry Point
 * other part of the Application access anything related to the Thing from here
 */

const Controller = require('./auth.controller');
const Error = require('./auth.errors');

const auth = { Controller, Error }

module.exports = auth;
module.exports.default = auth;
module.exports.auth = auth;