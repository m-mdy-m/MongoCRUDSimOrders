exports.getHome = (req,res)=>{
    res.render('home',{
        title:"home",
        path:req.path
    })
}