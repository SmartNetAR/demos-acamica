

let getUserById = ( id, callback ) => {
  if ( id === 20 ) {
    callback( `El usuario ${id} no existe` )
  } else {
    let usuario = {
      nombre: "Mauricio",
      id: id
    }
    callback( null, usuario )
  }
}

getUserById( 21, ( error, usuario ) => {
  if ( error ) {
    return console.log("error", error)
  }
  console.log("Usuario de la base de datos", usuario )
})