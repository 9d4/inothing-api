const router = module.exports = require("express").Router();
const thingController = require("../app/thing/thing.controller");

router.get("/:thingId", thingController.get);
router.post("/", thingController.create);
