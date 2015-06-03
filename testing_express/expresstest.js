// dependencies
var nunjucks = require("nunjucks");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//handling static files
app.use("/", express.static("static"));

nunjucks.configure("templates", {autoescape:true});

var content = nunjucks.render("index.html");
console.log(content);


app.get("/get", function(req, res) {
    res.send(content);
});

app.post("/add", function(req, res){
    res.json(req.body);
    console.log(req.params);
    console.log("Body::::");
    console.log(req.ip);
    if(req.body.temperature){
        console.log("Temperatrure has been sent:"+req.body.temperature)
    }
});

app.post("/add/:something/:stuff", function(req, res){
    res.json(req.body);
    console.log(req.params);
    console.log("Body::::");
    console.log(req.ip);
    if(req.body.temperature){
        console.log("Temperatrure has been sent:"+req.body.temperature)
    }
});

app.listen(3000);
