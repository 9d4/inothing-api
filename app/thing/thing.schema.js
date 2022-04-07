const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    thingId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
