const mongoose = require("mongoose");
const { generateThingId } = require("../shared/helpers");

const thingSchema = module.exports = new mongoose.Schema({
    thingId: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

thingSchema.pre("save", async function (next) {
    // generate id then insert to thingId field
    this.thingId = generateThingId();
});
