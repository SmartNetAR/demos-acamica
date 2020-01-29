// Map
// El método .map() se usa cuando querés:
// Realizar un conjunto de declaraciones con cada valor del arrego.
// Devolver el valor (presumiblemente) modificado.

const valores = [1, 2, 3, 4];

let mitadoes = valores.map(valor => valor / 2);


// Filter
// El método .filter() se utiliza cuando queremos extraer un subconjunto de valores del arreglo. 
// Cada elemento en el iterable que se evalúa como verdadero se incluirá en el filtro.

const edades = [15,20,3,14,52,66,7,18];

let mayores = edades.filter(edad => edad >= 18);

let menores2 = edades.filter( function (edad) {
    return edad < 18;
} );


// Reduce
// El nombre del método se refiere a reducir varios valores a un solo valor. 
// se está acumulando en lugar de reducir.

// parametros (acumulador y valor del elemento)

const valores = [1,2,3,4];

let total2 = valores.reduce((acumulador, valorActual ) => acumulador + valorActual, 500);

