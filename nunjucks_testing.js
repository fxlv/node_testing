var nunjucks = require("nunjucks");
//simplest form of nunjacks usage
nunjucks.configure({autoescape:true});
var hi = nunjucks.renderString("Hello {{username}}",{username:"testuser"});
console.log(hi);

//now lets use templates
nunjucks.configure("templates",{autoescape:true});
var content = nunjucks.render("index.html",{username: "testuser"})
console.log(content);


// now we serve something over http

var http = require("http");
var server = http.createServer(function (req,res){
	res.write(content);
	res.end();
});

server.listen(4002,"localhost");
