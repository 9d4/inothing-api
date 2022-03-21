const router = require("express").Router();
const authController = require("../app/auth/auth");

router.post("/auth/login", authController.login);
router.get("/auth/logout", authController.logout);
router.post("/auth/register", authController.register);

module.exports = router;
