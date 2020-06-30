const express = require("express");
const router = express.Router();
const products = require("../models/product");
router.get("/", function (req, res, next) {
  products.find({}, function (err, products) {
    // console.log(products);
    res.render("index", {
      products: products,
    });
  });
});
module.exports = router;
