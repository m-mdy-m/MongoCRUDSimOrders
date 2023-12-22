const express = require("express");
const route = express.Router();
const shopControllers = require("../controllers/shop");
route.get("/add-product", shopControllers.getAddProducts);
route.post('/add-product', shopControllers.postAddProduct)

route.post('/cart',shopControllers.postCart)
module.exports = route;
