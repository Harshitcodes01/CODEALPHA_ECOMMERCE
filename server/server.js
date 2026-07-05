const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const authRoutes =require("./routes/authRoutes");
const productRoutes =require("./routes/productRoutes");
const orderRoutes =
require("./routes/orderRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

require("./config/database");
require("./database/seed");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/orders", orderRoutes);
app.use(
    "/uploads",
    express.static(
        path.join(__dirname, "uploads")
    )
);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "NovaCart API Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});