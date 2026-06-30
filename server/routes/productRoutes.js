const express = require("express");
const router = express.Router();

const {
  getProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");
const upload = require("../middleware/upload");

router.put("/:id", updateProduct);

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post(
  "/",
  upload.single("image"),
  addProduct
);

router.delete("/:id", deleteProduct);

module.exports = router;