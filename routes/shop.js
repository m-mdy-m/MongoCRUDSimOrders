const express = require('express')
const route = express.Router()

route.get('/add-product', (req,res)=>{
    res.render('shop/add-product', {
        title:"add-product",
        path:req.path,
    })
})

module.exports = route