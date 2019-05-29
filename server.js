const express = require("express"); //require express

const city = require("./routes/api/city"); //go to this file

//set up express app
const app = express(); //()fire the function express
app.use(express.json());

//use routes
app.use("/api/city", city); //refer to the city variable which is the file called city

//listen for requests from a port #
const port = process.env.PORT || 5000; //listen to whatever is in the environment variable PORT OR Port 5000

const mongoose = require("mongoose"); //require mongoose

//connect to mongoDB
//we are connecting to a mongoDB database
mongoose.connect(
  "mongodb+srv://UserOne:userone@mytinerarydb-ldtub.mongodb.net/MYtineraryDB?retryWrites=true",
  { useNewUrlParser: true } //<--new requirement
); //what we want to connect to.

//listen to this event once. once the connection is open, fire this function
mongoose.connection
  .once("open", function() {
    console.log("connection has been made!");
  }) //whenever there is an error pass this callback function instead
  .on("error", function(error) {
    console.log("connection error", error);
  });

//listening for GET requests
app.get("/test", (req, res) => res.send("HELLO WORLD"));

app.listen(port, () => console.log(`Server running on port ${port}`));
