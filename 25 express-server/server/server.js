const express = require("express");
const pi = require("./test");

const app = express();

app.get("/", function (req, res) {
  const empleado = {
    nombre: "Juan",
    cargo: "gerente",
    url: req.url
  };
  res.json({ saludar: saludo + empleado.nombre });
});

app.listen(3000, function () {
  console.log(pi);
  console.log("Example app listening on port 3000!");
});
