const mongoose = require("mongoose"); //require mongoose

const Schema = mongoose.Schema;
//SCHEMA
const schemaCity = new Schema({
  cityname: String,
  country: String
});

//exporting the model file
module.exports = mongoose.model("city", schemaCity);
