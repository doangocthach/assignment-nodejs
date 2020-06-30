const express = require("express");
const router = express.Router();
const product = require("../models/product");
var mkdirp = require("mkdirp");
const { body, validationResult } = require("express-validator");
const validator = [
  // username must be an email
  body("product_name")
    .notEmpty()
    .withMessage("Product Name field is required!"),
  body("price").notEmpty().withMessage("price field is required!"),
  body("description").notEmpty().withMessage("description field is required!"),
  body("files").isEmpty().withMessage("Image is required!"),
  body("product_name").notEmpty().withMessage("must contain a number"),
];

const assert = require("assert");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
  }
};
const upload = multer({ storage, fileFilter });
// const upload = multer({ dest: "uploads/" });
router.post(
  "/updateProduct",
  upload.array("image", 12),
  async (req, res, next) => {
    const {
      id,
      product_name,
      price,
      description,
      category,
      files,
      size,
      color,
      quantity,
    } = req.body;
    let detail = [];
    if (Array.isArray(size) && Array.isArray(color) & Array.isArray(quantity)) {
      for (let i = 0; i < size.length; i++) {
        if (size[i] && color[i] && quantity[i]) {
          detail[i] = {
            size: size[i],
            color: color[i],
            quantity: quantity[i],
          };
        }
      }
    } else {
      detail = [
        {
          size,
          color,
          quantity,
        },
      ];
    }
    const image = [];
    req.files.forEach((file) => {
      image.push(file.filename);
    });

    // const updateProduct = await product.findById(id)

    await product
      .updateOne(
        { _id: id },
        {
          product_name: product_name,
          price: price,
          description: description,
          category: category,
          image: image,
          detail: detail,
        }
      )
      .exec();
    await product.find({}, function (err, products) {
      res.render("add-products", {
        products: products,
      });
    });
    // const productUpdate = product.findById(id).lean();
    // pro
  }
);

router.get("/add-products", (req, res, next) => {
  product.find({}, function (err, products) {
    res.render("add-products", {
      products: products,
    });
  });
});

router.post(
  "/add-products",
  upload.array("image", 12),
  validator,
  async function (req, res) {
    let errors = validationResult(req).errors;
    console.log(errors);
    const {
      product_name,
      price,
      description,
      category,
      files,
      size,
      color,
      quantity,
    } = req.body;
    const image = [];
    req.files.forEach((file) => {
      image.push(file.filename);
    });

    let detail = [];
    if (Array.isArray(size) && Array.isArray(color) & Array.isArray(quantity)) {
      for (let i = 0; i < size.length; i++) {
        if (size[i] && color[i] && quantity[i]) {
          detail[i] = {
            size: size[i],
            color: color[i],
            quantity: quantity[i],
          };
        }
      }
    } else {
      detail = [
        {
          size,
          color,
          quantity,
        },
      ];
    }

    if (errors.length <= 0) {
      const { _id: id } = await product.create({
        product_name,
        price,
        description,
        category,
        image,
        detail,
      });
      product.find({}, function (err, products) {
        res.render("add-products", {
          products: products,
        });
      });
    }
  }
);
module.exports = router;
