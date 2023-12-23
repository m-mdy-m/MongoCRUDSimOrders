const express = require("express");
const route = express.Router();
const shopControllers = require("../controllers/shop");
route.get("/add-product", shopControllers.getAddProducts);
route.post('/add-product', shopControllers.postAddProduct)
route.post('/cart',shopControllers.postCart)
route.get('/cart', shopControllers.getCart)


route.post('/cart/:prodId',shopControllers.deleteCart)
module.exports = route;
