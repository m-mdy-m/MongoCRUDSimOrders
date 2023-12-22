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
  const editMode = req.query.edit;
  const id = req.params.prodId;
  const products = await Product.findById(id);
  res.render("shop/add-product", {
    title: "editUser",
    path: req.path,
    editMode,
    products,
  });
};
exports.postEdit = async (req, res) => {
  const id = req.body.prodId;
  const name = req.body.name;
  const price = req.body.price;
  const product = await new Product(name, price, id);
  await product.save();
  console.log("update user");
  res.redirect("/");
};
console.log("hi2");
exports.deleteUser = async (req, res) => {
  const id = req.params.prodId;
  console.log(id);
};
