const express = require("express");
const router = express.Router();
const product = require("../models/product");
const cookieParser = require("cookie-parser");
const { json } = require("express");

const getProductByProductId = async (productId) => {
  const productResult = await product.findById(productId).lean();
  if (!productResult) {
    return {};
  }
  return productResult;
};
router.post("/product-detail", async (req, res, next) => {
  const cookies = JSON.parse(JSON.stringify(req.cookies));
  const cookie = cookies["@cart"];
  // const cookies = cookie;
  const { id, size, color, quantity } = req.body;
  const cartInfo = {
    productId: await product.findById(id).lean(),
    size: size,
    color: color,
    quantity: quantity,
  };
  if (Array.isArray(cookie)) {
    cookie.push(cartInfo);
    res.cookie("@cart", cookie);
  } else {
    res.cookie("@cart", [cartInfo]);
  }
  res.send("confirm");
});

router.get("/product-detail/:id", async (req, res, next) => {
  // const cookie = JSON.parse(JSON.stringify(req.cookies));
  // console.log(cookie);
  const productId = req.params.id;
  // console.log(await getProductByProductId(productId));
  res.render("product-detail", {
    product: await getProductByProductId(productId),
  });
});

module.exports = router;
