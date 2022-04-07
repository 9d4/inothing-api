const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { getUser } = require("./app/shared/middlewares");

const app = module.exports = express();
const port = process.env.PORT || 9100;
const mongouri = process.env.MONGO_URI;

app.use(express.json());
app.use((req, res, next) => {
    if (
        req.header("Content-Type") &&
        req.header("Content-Type") != "application/json"
    )
        return res.sendStatus(415);

    next();
});
app.use(cookieParser());

app.use(getUser);
app.use(require("./routes/routes"));

const server = mongoose.connect(mongouri).then(() => {
    return app.listen(port, () => {
        console.log("Listening at port", port);
    });
});

module.exports = {app, server};