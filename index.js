const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/production.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

// Root route
app.get("/", (req, res) => {
  res.send("Hello Shaybah💦 API xup hahaha welcome on board");
});

// Connect to MongoDB and start server
mongoose
  .connect("mongodb+srv://royins64:6k32f6AEhvCe4ML0@cluster0.b0yk7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected successfully");
    app.listen(3000, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });

