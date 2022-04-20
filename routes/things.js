const router = module.exports = require("express").Router();
const thingController = require("../app/thing/thing.controller");

router.get("/", thingController.getAll);
router.get("/:thingId", thingController.get);
router.post("/", thingController.create);
router.put("/:thingId", thingController.update);
