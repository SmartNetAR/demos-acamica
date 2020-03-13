const express = require("express");
const pi = require("./test");
const mysql = require('mysql');

const app = express();

app.get("/tareas", function (req, res) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tareas_db'
  });

  connection.connect();

  connection.query('SELECT id, titulo, duracion, complejidad, descripcion, terminada, usuario FROM tasks', function (err, rows, fields) {
    if (err) throw err;

    res.json(rows);
  });

  connection.end();
});

app.get("/tareas/:id", function (req, res) {
  const taskId = req.params.id;
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tareas_db'
  });

  connection.connect();

  connection.query('SELECT id, titulo, duracion, complejidad, descripcion, terminada, usuario FROM tasks WHERE id = ' + taskId, function (err, rows, fields) {
    if (err) throw err;

    if (rows.length === 0) res.json("No existe el registro")

    res.json(rows[0]);
  });

  connection.end();
});


app.listen(5000, function () {
  console.log(pi);
  console.log("Example app listening on port 5000!");
});
