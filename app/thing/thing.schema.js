const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    thingId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        require: true,
    },
}, {
    timestamps: true,
});
