const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('home',{
        title:"home",
        path:req.path
    })
})

module.exports = router