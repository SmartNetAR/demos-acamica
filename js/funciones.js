// declaro mis funciones
function calcularEdad(añoNacimiento) {
  var añoActual = 2019 ;  
  var edad = añoActual - añoNacimiento ;
  return edad;
}

function calcularEdadGato(nacimientoDelGato) {
  var edad = calcularEdad( nacimientoDelGato ) * 7 ;
  return edad;
}

// invocando funciones desde el script
var suEdad = calcularEdad(1989);

console.log("su edad es: " + suEdad) ;

console.log("la edad de tu mascota es: " + calcularEdadGato( 2012 ) ) ;


// funciones que son llamadas desde botones
function clickBtnEdadHumana() {

  // obtengo el valor del input con el año de nacimiento y lo almaceno en una variable
  var textEdadHumana = document.getElementById("text-edad-humana").value ;

  //creo el mensaje concatenando un string con el resultado de la función
  var mensaje = "la edad del humano es: " + calcularEdad(textEdadHumana) ;

  // obteniendo el elemento h3 con el id "resultado-edad-humano"
  // agrego al html (con innerHTML) el mensaje
  document.getElementById("resultado-edad-humano").innerHTML = mensaje ;
}


function clickBtnEdadMascota() {  

  // obtengo el valor del input con el año de nacimiento y lo almaceno en una variable
  var txtEdadMascota = document.getElementById("text-edad-mascota").value ;  

  // almaceno el resultado de la función en una variable
  var edadMascota = calcularEdadGato(txtEdadMascota) ;

  // lo agrego al html directamente concatenando el string + la variable
  document.getElementById("resultado-edad-mascota").innerHTML = "la edad de la mascota es: " + edadMascota ;
}