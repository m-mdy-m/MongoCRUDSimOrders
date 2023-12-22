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
  console.log("products =>", products.price);
  res.render("shop/add-product", {
    title: "editUser",
    path: req.path,
    editMode,
    products,
  });
};
exports.postEdit = async (req,res)=>{
    
}