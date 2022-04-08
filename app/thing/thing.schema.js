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
    let thingId = "";
    let thing = null;

    do {
        // generate id then insert to thingId field
        thingId = generateThingId();
        // validate that there is no thing with the same thingId
        thing = await this.constructor.findOne({ thingId });
    } while (thing !== null);

    this.thingId = thingId;
    next();
});
