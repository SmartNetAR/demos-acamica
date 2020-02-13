function getUsuarioSync( id ) {
    let usuario = {
        id,
        nombre: `Usuario ${ id }`
    }
    const startPoint = new Date().getTime()
    while (new Date().getTime() - startPoint <= 3000) {
        // esperando
        // haciendo el fetch de base de datos
    }

    return usuario
}

function getUsuario(id, callback) {
    let usuario = {
        id,
        nombre: `Usuario ${ id }`
    }

    // esperando
    // haciendo el fetch de base de datos
    setTimeout( () => callback( usuario ), 0 )

}

module.exports = {
    getUsuario,
    getUsuarioSync
}