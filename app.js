const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");

app.engine("ejs", ejsMate); // ✅ register ejs-mate first
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,'public')));


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/",(req,res)=>{
    res.render("Home.ejs")
})
app.listen(3000, () => {
  console.log("port is working");
});

