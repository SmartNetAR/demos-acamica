const db = require('../../mysql/connection.js');
const queries = require('./queries.js')

exports.index = function (req, res) {

    const { terminada, usuario } = req.query;
    const arr = [];

    const sql = queries.obtenerTodas;

    let where = " WHERE t.id > 0";

    if (terminada) {
        where = `
            ${where} AND  t.terminada = ?
    `;
        arr.push(terminada == "true" ? true : false);
    }

    if (usuario) {
        where = `
        ${where} AND t.usuario = ?
    `;
        arr.push(usuario);
    }

    db.query(sql + where, arr, function (err, rows, fields) {
        if (err) {
            res.status(500).send("Internal Error.");
            throw err;
        }

        res.json(rows);
    });

}

exports.show = function (req, res) {
    const taskId = req.params.id;

    db.query( queries.obtenerPorId , [ taskId ], function (err, rows, fields) {
        if (err) {
            res.status(500).send("Internal Error.");
            throw err;
        }

        if (rows.length === 0) return res.status(400).json("No existe el registro");

        const idComplejidad = rows[0].id_complejidad;

        db.query(`
        SELECT nombre
            FROM complejidad WHERE id = ${idComplejidad}
        `, function (err, complejidad, fields) {

            if (err) {
                res.status(500).send("Internal Error.");
                throw err;
            }

            const task = {
                id: rows[0].id ,
                titulo: rows[0].titulo,
                duracion: rows[0].duracion,
                descripcion: rows[0].descripcion,
                terminada: rows[0].terminada ? "si" : "no",
                usuario: rows[0].usuario,
                complejidad: complejidad[0].nombre
            }

            res.json(task);
        })
    });

    

}

exports.store = function (req, res) {
    console.log("body", req.body);

    res.status(201).json(req.body);
}