const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));

const homeRoutes = require("./routes/home");
app.use(homeRoutes);

app.listen(3000, () => {
  console.log("run server on port 3000");
});
