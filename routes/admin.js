const express = require("express");
const route = express.Router();
const adminControllers = require("../controllers/admin");

route.get("/dashboard", adminControllers.getDashboard);

route.get('/edit-product', adminControllers.getEdit)

module.exports = route;
