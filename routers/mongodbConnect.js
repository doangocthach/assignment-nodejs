const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dbName = "assignment_nodejs";
var uri = `mongodb://127.0.0.1:27017/${dbName}`;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});
