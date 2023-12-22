const express = require("express");
const route = express.Router();
const shopControllers = require("../controllers/shop");
route.get("/add-product", shopControllers.getAddProducts);

module.exports = route;
