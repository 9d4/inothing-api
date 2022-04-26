const router = module.exports = require("express").Router();
const { Controller } = require("../app/thing/index");

router.get("/", Controller.getAll);
router.get("/:thingId", Controller.get);
router.post("/", Controller.create);
router.put("/:thingId", Controller.update);
router.delete("/:thingId", Controller.delete);
