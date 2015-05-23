var http = require('http');
var os = require("os");
var get_ip = require('ipware')().get_ip;

var http_port = 3000;


function handle_request(req, res){
    console.time("request");
    var ip_info = get_ip(req);
    console.log("Got a request");
    res.setHeader("Content-Type", "text/html");
    var client_ip = ip_info['clientIp'];
    res.write(client_ip);
    res.write("\n\n");
    res.write(req.headers['user-agent']);
    res.end();
    console.timeEnd("request");
}
var server = http.createServer(function (req,res){ 
    try { 
        handle_request(req,res); 
    } catch(e) { 
        console.log("Error happened");
        console.log(e); 
    }
});

server.listen(http_port);
var address = server.address();
console.log("Running on",os.hostname());
console.log("now listening on ip",address.address,"port", address.port,"family:",address.family);