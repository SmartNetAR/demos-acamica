// let { getUsuarioSync } = require( "./usuarios" )

// console.log( "inicio del programa síncrono" );

// const usuario1 = getUsuarioSync( 1 )
// console.log( usuario1 );

// const usuario2 = getUsuarioSync( 2 )
// console.log( usuario2 );

// console.log( "fin del programa" );













  
  let { getUsuario } = require( "./usuarios" )
  
  console.log( "inicio del programa asíncrono" );
  
  getUsuario( 1, ( usuario ) =>
    console.log( usuario )
  )
  
  getUsuario( 2, ( usuario ) =>
    console.log( usuario )
  )
  
  console.log( "fin del programa" );


