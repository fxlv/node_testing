var http = require('http');
var os = require("os");
var get_ip = require('ipware')().get_ip;

var http_port = 3000;

var server = http.createServer(function(req, res) {
    var ip_info = get_ip(req);
    console.log("Got a request");
    res.write(ip_info['clientIp']);
    res.write("\n\n");
    res.write(req.headers['user-agent']);
    res.end();
});

server.listen(http_port);
var address = server.address();
console.log("Running on",os.hostname());
console.log("now listening on ip",address.address,"port", address.port,"family:",address.family);