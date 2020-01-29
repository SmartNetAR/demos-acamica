// class

// templates `${}
let nombre = 'mariah'
let apellido = 'carey'

// let saludo = 'Bienvenid@ ' + nombre + ' ' + apellido + '!'
let saludo = `Bienvenid@ ${nombre} ${apellido}!`
alert(saludo);


function double (number) {
  return `El doble de ${number} es ${number * 2}`
}
console.log(double(6)); 

// mas funciones con strings como repeat o includes, también con números, formatos y fechas Intl











let obj = {};
obj.first = 'Jane';
obj.last = 'Doe';

// extraer estos datos:

let f = obj.first;
let l = obj.last;


// construir objetos literales
let obj = { first: 'Jane', last: 'Doe' };

// En ES6 Destructuring permite el mismo tipo de sintaxis para extraer datos:
let { first: f, last: l } = obj;



// valores por defecto
var {foo=3} = { name: "leo" }
// foo = 2

var {foo=3} = { foo: undefined }
// foo = 3
var {foo=3} = { bar: 2 }
// foo = 3

// lo mismo con arrays
let [uno, dos, tres=3, cuatro] = [1,2]

// otro ejemplo obj
const dimensiones = {alto:10, profundo:40, ancho:20}
let {alto, ancho} = dimensiones





// mapeando en un forEach
var libros = [
    { titulo: 'Titulo 1', autor: 'Autor 1' },
    { titulo: 'Titulo 2', autor: 'Autor 2' }
  ];
libros.forEach(function( { titulo, autor } ) {
    console.log(titulo, '-', autor);
});
  // &lt;- Titulo 1 - Autor 1
  // &lt;- Titulo 2 - Autor 2










  // Operador Spread (...)

var arr1 = ['uno', 'dos'];
var arr2 = ['tres'];
var arr3 = ['catorce'];


console.log([...arr1, ...arr2, ...arr3]); // [ 'uno', 'dos', 'tres', 'catorce' ]





/// ejemplo separación de elementos separados por comas
const sumar = (a, b) => a+b;

var arr1 = [1, 2];











// arrow function que retorna objeto
var devolverObjeto = function devolverUnObjeto (name) {
  return {first: name, last: 'carey'}
}

let devolverObjeto = name => {
  var resultado = `su nombre es ${name}`
  return resultado
}









// arrow con filter
let arr = [5, 6, 13, 0, 1, 18, 23];


const even = arreglo => arreglo.filter(num => num% 2 == 0)

function even(array) {
  arregloFinal = []
  for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0) {
      arregloFinal.push(array[i])
    }
  }
  return arregloFinal;
}








// Spread como parámetro  =  cantidad indefinida de parámetros
function promedio(...numeros) {
    const suma = numeros.reduce(function (acc, value) {
        return acc + value;
    }, 0);
    return suma / numeros.length;
}




// arrow function con .reduce con mas arrow function para devolver pares
let arr = [5, 6, 13, 0, 1, 18, 23];
// even(arr) = 6,0,18


// devolver el mayor con operador ternario
// mayor(5,10)

// shortland properties
function devolverObjeto(nombre, apellido) {
  objetoResult = {
    nombre,
    apellido
  }
  return objetoResult
}
var obj = devolverObjeto("mariah", "carey")
//también se pueden acortar métodos de objetos

var persona = {
  nombre: 'mariah',
  saludar: function() {
    console.log(this.nombre)
  }
}