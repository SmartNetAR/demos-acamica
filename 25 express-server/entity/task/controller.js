const mysql = require('mysql');
const db = require('../../mysql/connection.js');

exports.index = function (req, res) {

  const {terminada, usuario} = req.query;
  const arr = [];
  
  const sql = `
  SELECT id, titulo, duracion, complejidad, descripcion, terminada, usuario
  FROM tasks
  `;
  
  let where = " WHERE id > 0";
  
  if ( terminada ) {
    where = `
      ${where} AND  terminada = ?
    `;
    arr.push(terminada == "true" ? true : false);
  }

  if ( usuario ) {
    where = `
        ${where} AND usuario = ?
    `;
    arr.push(usuario);
  }

  db.query( sql + where, arr , function (err, rows, fields) {
    if (err) {
      res.status(500).send("Internal Error.");
      throw err;
    }

    res.json(rows);
  });

}

exports.show = function (req, res) {
  const taskId = req.params.id;

  db.query('SELECT id, titulo, duracion, complejidad, descripcion, terminada, usuario FROM tasks WHERE id = ' + taskId, function (err, rows, fields) {
    if (err) {
      res.status(500).send("Internal Error.");
      throw err;
    }

    if (rows.length === 0) return res.status(400).json("No existe el registro");

    res.json(rows[0]);
  });

}

exports.store = function (req, res) {
  console.log( "body", req.body );

  res.status(201).json(req.body);
}