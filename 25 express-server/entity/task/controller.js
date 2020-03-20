const mysql = require('mysql');

exports.index = function (req, res) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tareas_db'
  });

  connection.connect();

  connection.query('SELECT id, titulo, duracion, complejidad, descripcion, terminada, usuario FROM tasks', function (err, rows, fields) {
    if (err) {
      res.status(500).send("Internal Error.");
      throw err;
    }

    res.json(rows);
  });

  connection.end();
}

exports.show = function (req, res) {
  const taskId = req.params.id;
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tareas_db'
  });

  connection.connect();

  connection.query('SELECT id, titulo, duracion, complejidad, descripcion, terminada, usuario FROM taskss WHERE id = ' + taskId, function (err, rows, fields) {
    if (err) {
      res.status(500).send("Internal Error.");
      throw err;
    }

    if (rows.length === 0) return res.status(400).json("No existe el registro");

    res.json(rows[0]);
  });

  connection.end();
}

exports.store = function (req, res) {
  console.log( "body", req.body );

  res.status(201).json(req.body);
}