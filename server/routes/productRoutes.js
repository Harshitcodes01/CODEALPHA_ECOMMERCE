const express = require("express");
const router = express.Router();

const {
  getProducts,
  addProduct,
  getProduct,
  deleteProduct
} = require("../controllers/productController");

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", addProduct);

router.delete("/:id", deleteProduct);

module.exports = router;