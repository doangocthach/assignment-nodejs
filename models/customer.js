const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customer = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("product", schema, "product");
