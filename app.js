const express = require("express");
const app= express();

app.set("view engine", "ejs");
app.get("/", function (req,res){
    res.render("patatap");
})

app.listen(5000, function(){
    console.log("Patatap started");
});

