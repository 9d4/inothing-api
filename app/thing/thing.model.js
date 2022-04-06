const mongoose = require("mongoose");
const thingSchema = require("./thing.schema");

module.exports = mongoose.model("Thing", thingSchema);
