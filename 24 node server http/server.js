const http = require('http');

const server = http.createServer( (req, res) => {

  res.writeHead( 200, {'Content-type': 'application/json'})

  const empleado = {
    nombre: "Juan",
    cargo: "gerente",
    url: req.url
  }
  res.write( JSON.stringify( empleado ) )
  res.end()
})

server.listen(8080, () => {
  console.log("Escuchando en el puerto 8080")

} )
