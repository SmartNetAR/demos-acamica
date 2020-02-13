var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead( 200, {"content-type": "text/html"});
    res.end("<h1>Hola Mundo!</h1>");

})


server.listen(8000);