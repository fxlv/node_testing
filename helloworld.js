var http = require('http');
var get_ip = require('ipware')().get_ip;

var server = http.createServer(function(req, res) {
    var ip_info = get_ip(req);
    console.log("Got a request");
    res.write(ip_info['clientIp']);
    res.write("\n\n");
    res.write(req.headers['user-agent']);
    res.end();
});

server.listen(3000);

