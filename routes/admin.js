const express = require("express");
const route = express.Router();
const adminControllers = require("../controllers/admin");

route.get("/dashboard", adminControllers.getDashboard);

route.get('/edit-product/:prodId', adminControllers.getEdit)
route.post('/edit-product' , adminControllers.postEdit)
route.post('/dashboard/:prodId', adminControllers.deleteUser)
module.exports = route;
