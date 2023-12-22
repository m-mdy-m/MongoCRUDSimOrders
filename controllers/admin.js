const Product = require("../models/Product");
exports.getDashboard = async (req, res) => {
  const products = await Product.fetchAll();
  res.render("admin/dashboard", {
    title: "dashboard",
    path: req.path,
    products,
  });
};
exports.getEdit = async (req, res) => {
    const id  = req.params.prodId
    console.log('id =>', id);
//   res.render("shop/product", {
//     title: "editUser",
//     path: req.path,
//   });
};
