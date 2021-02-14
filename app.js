const functions = require("./functions")

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const sample = () => 'proba funkcji';

app.set("view engine","hbs");
app.use("/asssets", express.static(path.join(__dirname, "./assets")))
app.use("/js", express.static(path.join(__dirname, "./js")))

app.get("/", function(req,res){
    //res.send("Glowna domena")

    res.render("index", {
        pageTitle: "Zajecia 14.02.2021",
        subTitle: functions.subtitle,
        subsubTitle: functions.sample()
    })

})

app.get("/about", function(req,res){
   // res.send("Strona o mnie")
   res.render("about")
})

app.listen(port, (err) => {
    if (err) {return console.log(`Blad ${err}`)}
    console.log(`serwer dziala na porcie ${port}`)
})