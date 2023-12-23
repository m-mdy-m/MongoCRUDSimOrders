const Product = require("../models/Product");
exports.getAddProducts = (req, res) => {
  res.render("shop/add-product", {
    title: "add-product",
    path: req.path,
    editMode: false,
  });
};
exports.postAddProduct = async (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const userId = req.user._id;
  const product = await new Product(name, price, null, userId);
  await product.save();
  console.log("create Product");
  res.redirect("/");
};
exports.postCart = async (req, res) => {
  const id = req.body.prodId;
  const product = await Product.findById(id);
  const addCart = await req.user.addToCart(product);
  console.log("add cart =>", addCart);
  return res.redirect("/cart");
};
exports.getCart = async (req,res)=>{
  const products = await req.user.getCart();
	res.render("shop/cart", {
		title: "Your Cart",
		path: req.path,
		products: products,
	});
}