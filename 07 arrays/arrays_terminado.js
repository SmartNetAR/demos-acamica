var productosArray = ['sandía', 'soda', 'arroz', 'azucar'];

var ol = document.getElementById("productosList");

function mostrarLista( arreglo ) {
  // for ( let i = 0; i < arreglo.length; i++ ) {
  //   const li = document.createElement('li');
  //   li.appendChild( document.createTextNode( arreglo[i] ) );
  //   ol.appendChild( li );
  // }

  // arreglo.forEach(element => {
  //   const li = document.createElement('li');
  //   li.appendChild( document.createTextNode( element ) );
  //   ol.appendChild( li );
  // });

  arreglo.forEach( function recorrer ( el ) {
    const li = document.createElement('li') ;
    li.textContent = el;
    ol.appendChild( li ) ;
  });

}

function borrarLista() {
  while ( ol.firstChild ) {
    ol.removeChild( ol.firstChild );
  }
}

function actualizarLista() {
  borrarLista();
  mostrarLista(productosArray);
}

mostrarLista( productosArray );

function clickAgregar() {
  const nuevoElemento = prompt("ingrese un nuevo producto");

  if ( comprobarSiExiste( nuevoElemento ) ) {

    
  } else {
    
    agregarElemento(nuevoElemento);

  }
}

function clickQuitar() {
  const elemento = prompt("ingrese el elemento a borrar");
  quitarElemento( elemento );
}

function comprobarSiExiste( el ) {
  return false;
}

function agregarElemento( el ) {
  productosArray.push( el );
  borrarLista();
  mostrarLista(productosArray);
}

function quitarElemento( el ) {
  pos = productosArray.indexOf( el );
  if ( pos >= 0 ) {
    productosArray.splice(pos, 1);
  }
  actualizarLista()
}


