const http = require('http');

http.createServer(function (req, res) {
    res.writeHead( 200, {"content-type": "application/json"});
    const usuario = {
        nombre: "Juan",
        edad: 20,
        nacionalidad: "Argentino",
        url: req.url
    }
    res.write( JSON.stringify( usuario ) );
    res.end();

})
.listen(8080);