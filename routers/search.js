const express = require("express");
const router = express.Router();
const product = require("../models/product");

router.get("/search", async (req, res, next) => {
  let result;
  const qr = new RegExp(req.query.querry, "i");
  const low = req.query.low;
  const high = req.query.high;
  const category = req.query.category;
  if (low && high) {
    result = await product.find({ price: { $gte: low, $lte: high } }).lean();
  } else if (low && !high) {
    result = await product.find({ price: { $gte: low } }).lean();
  } else if (high && !low) {
    result = await product.find({ price: { $gte: high } }).lean();
  } else {
    result = await product
      .find({ $or: [{ product_name: qr }, { category: qr }] })
      .lean();
  }
  res.render("index", {
    products: result,
  });
});

// router.get();

module.exports = router;
