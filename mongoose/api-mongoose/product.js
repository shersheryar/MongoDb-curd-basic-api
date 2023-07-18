const mongoose = require("mongoose");

const citesSchema = new mongoose.Schema({
  name: String,
  country: String,
  timezone: String,
  population: Number,
  location: Object,
});

module.exports = mongoose.model("cities", citesSchema);
