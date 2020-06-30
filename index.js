const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
// const expressValidator = require("express-validator");
// app.use(expressValidator());
const mongooseConnection = require("./routers/mongodbConnect");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "uploads")));
app.set("view engine", "pug");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const home = require("./routers/home");
const admin = require("./routers/admin");
const shopping_cart = require("./routers/shopping_cart");
const add_products = require("./routers/add_products_view");
const product_detail = require("./routers/product_detail");

app.use("/", require("./routers/search"));
app.use("/", shopping_cart);
app.use("/", product_detail);
app.get("/", home);
app.get("/admin", admin);
app.use("/", add_products);
// app.use("/add-products", add_products);
app.get("/product-detail/:id", product_detail);
app.post("/product-detail", product_detail);

app.use((req, res, next) => {
  res.status(404).render("404");
});
app.listen(3001, () => {
  console.log("server running in localhost:3001...");
});
