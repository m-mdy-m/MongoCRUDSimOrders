const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const data = require("./database/database").connectDb
const User = require("./models/User")
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));

app.use( async (req,res,next)=>{
    try{
        const user = await User.findById('658592d76ef84dc1adf01bc1')
        if (!user) {
            return res.redirect('/')
        }
        req.user = new User(user.name , user.email)
        next()
    }catch(err){
        console.log(err);
    }
})
const homeRoutes = require("./routes/home");
const shopRoutes = require('./routes/shop')
const adminRoute = require("./routes/admin")
app.use(homeRoutes);
app.use(shopRoutes)
app.use(adminRoute)

const startPro = async()=>{
    try{
        await data()
        console.log('connect data base');
        app.listen(3000, () => console.log("Server is running on port 3000"));
    }catch(err){
        console.log('err =>', err);
    }
}
startPro()