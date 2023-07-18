const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/21p8027_4A");
  const citesSchema = new mongoose.Schema({
    name: String,
    country: String,
    timezone: String,
    population: Number,
    location: Object,
  });

  const citiesModel = mongoose.model("cities", citesSchema);
  let data = new citiesModel({
    name: "gilgit",
    country: "pakistan",
    timezone: "asia",
    location: {
      longitude: 1,
      latitude: 2,
    },
  });
  let result = await data.save();
  console.log(result);
};

main();
