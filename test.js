const mongoose = require("mongoose");

const uri = "mongodb+srv://Gaurav:Gaurav8530DB@gauravdb.hx2ywz2.mongodb.net/codingworld?retryWrites=true&w=majority&appName=GauravDB";

mongoose.connect(uri)
  .then(() => {
    console.log("Connected");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Failed:", err);
    process.exit(1);
  });