const express = require('express');
const Product = require('../models/production.model');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller');
const router = express.Router();
// const productController = require('../controllers/product.controller.js');


///route to get all product
router.get('/', getProducts);
////route to get a single product
router.get("/:id", getProduct);
////route to add a product(new product)
router.post("/", createProduct);
///route to update a product(make changes to an existing product)
router.put("/:id", updateProduct);
///route to delete(remove a product)
router.delete("/:id", deleteProduct);






module.exports = router;