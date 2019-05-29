const express = require("express"); //require express

const router = express.Router();

//bring in the item Model
const City = require("../../models/City");

// @route GET api/city
// @desc Get All City
// @access Public

router.get("/", (req, res) => {
  City.find().then(cities => res.json(cities)); //fetch cities from the database
});

// @route POST api/city
// @desc Create A Post
// @access Public

router.post("/", (req, res) => {
  console.log(req);
  const newCity = new City({
    cityname: req.body.cityname,
    country: req.body.country
  });

  newCity.save().then(cities => res.json(cities));
});

module.exports = router;
