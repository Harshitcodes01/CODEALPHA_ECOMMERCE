const express = require("express");

const router = express.Router();

const {

    placeOrder,

    getOrders,

    getUserOrders,

    updateOrderStatus

} = require("../controllers/orderController");

router.get("/", getOrders);

router.get("/user/:userId", getUserOrders);

router.post("/", placeOrder);

router.put("/status/:id", updateOrderStatus);

module.exports = router;