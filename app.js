const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { getUser } = require("./app/shared/middlewares");

const app = express();
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
app.use(require("./routes/auth.js"));
app.use(require("./routes/home"));
app.use((req, res) => res.sendStatus(404));

mongoose.connect(mongouri).then(() => {
    app.listen(port, () => {
        console.log("Listening at port", port);
    });
});
