const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");
const thingSchema = require("../thing/thing.schema");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    rmqpassword: {
        type: String,
    },
    things: [mongoose.ObjectId],
});

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);

    // generate nanoid for RMQ password
    const rmqpass = nanoid();
    this.rmqpassword = rmqpass;

    next();
});
userSchema.static("login", async function (usernameOrEmail, password) {
    const user = await this.findOne({
        $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });
    if (!user) throw { usernameOrEmail: "Username or email not found" };

    const auth = await bcrypt.compare(password || "", user.password);
    if (!auth) throw { password: "Incorrect password" };

    return user;
});

module.exports = mongoose.model("User", userSchema);
