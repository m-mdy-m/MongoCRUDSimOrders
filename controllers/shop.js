exports.getAddProducts =  (req,res)=>{
    res.render('shop/add-product', {
        title:"add-product",
        path:req.path,
    })
}