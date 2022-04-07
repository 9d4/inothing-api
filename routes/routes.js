const router = module.exports = require("express").Router();
const authRouter = require("./auth");
const homeRouter = require("./home");

router.use(authRouter);
router.use(homeRouter);

// fallback
router.use((req, res) => res.sendStatus(404));
