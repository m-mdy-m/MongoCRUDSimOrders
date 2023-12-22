const Product = require('../models/Product')
exports.getHome = async (req,res)=>{
    const products = await Product.fetchAll()
    res.render('home',{
        title:"home",
        path:req.path,
        products,
    })
}