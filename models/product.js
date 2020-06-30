const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
  product_name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: [String],
  category: {
    type: String,
    default: "unisex",
  },
  detail: [
    {
      size: {
        type: String,
      },
      color: {
        type: String,
      },
      quantity: {
        type: Number,
      },
    },
  ],
});

module.exports = mongoose.model("product", schema, "product");
