const mongoose = require("mongoose");

const seasonSchema = new mongoose.Schema({
    url: String,
    title: { type: String, rquired: true },
    image_url: String,
    synopsis: String,
});

const Season = mongoose.model("Season", seasonSchema);

module.exports = Season;