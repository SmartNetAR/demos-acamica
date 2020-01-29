const pi = 3.1416;
var edad = 44;
let nombre = "juan";
//edad  = 50;
console.log(edad);

function mostrarNombre() {
  let nombre = "pepe";
  return nombre;
}
console.log( mostrarNombre() ) ;

if (true) {
  var edad = 20;
  console.log(edad + " dentro del alcance de bloque en el if")
  let nombre = "maria";
  console.log(nombre + " dentro del alcance de bloque en el if")
}

console.log(edad + " en alcance global");
console.log(nombre + " en alcance global");