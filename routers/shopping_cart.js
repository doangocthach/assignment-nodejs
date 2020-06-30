const express = require("express");
const { json } = require("body-parser");
const router = express.Router();

router.get("/shopping-cart", function (req, res, next) {
  const cookies = JSON.parse(JSON.stringify(req.cookies));
  if (cookies) {
    res.render("shopping-cart", {
      cart: cookies["@cart"],
    });
  } else {
    res.render("shopping-cart", {
      cart: [],
    });
  }
  //   res.send(cookies["@cart"]);
});

module.exports = router;
