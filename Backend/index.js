const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
mongoose
  .connect(
    "mongodb+srv://adarshsingh8008:HNR59oDMUXvrEF6k@cluster0.qv5utmx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("dbconnection successful"))
  .catch((err) => {
    console.log(err);
  });

// mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB connection Successfull!")).catch((err) => {
//     console.log(err);
// })
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(port, () => {
  console.log(`Backend server is running! on port ${port}`);
});
