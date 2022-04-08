const router = module.exports = require("express").Router();
const authRouter = require("./auth");
const homeRouter = require("./home");
const thingsRouter = require("./things");

const { authenticated } = require("../app/shared/middlewares");

router.use(authRouter);
router.use(homeRouter);
router.use("/things", authenticated, thingsRouter);

// fallback
router.use((req, res) => res.sendStatus(404));
