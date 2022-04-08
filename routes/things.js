const router = module.exports = require("express").Router();
const thingController = require("../app/thing/thing.controller");

router.post("/", thingController.create);
