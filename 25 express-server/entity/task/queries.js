module.exports = {
    obtenerTodas: `
        SELECT t.id, t.titulo, t.duracion, t.descripcion, t.terminada, t.usuario, c.nombre AS complejidad
            FROM tasks t
                JOIN complejidad c ON t.id_complejidad = c.id
        `,
    obtenerPorId: `
        SELECT id, titulo, duracion, descripcion, terminada, usuario, id_complejidad
            FROM tasks WHERE id = ?
        `
}

// INSERT INTO tasks ( titulo, descripcion, duracion, terminada, usuario, id_complejidad ) VALUES ( 'Titulo tarea sql', 'descripcion sql', 60, true, 'nombre', ( SELECT id FROM complejidad WHERE id = 2) );