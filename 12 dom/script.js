var asistentesPredeterminados = [
  ["juan", "juan@mail.com", "28"],
  ["Guido", "guido@mail.com", "22"],
  ["Mia", "mia@mail.com", "16"],
  ["tiziano", "tiziano@mail.com", "5"],
  ["micaela", "micaela@mail.com", "12"],
  ["martina", "martina@mail.com", "7"],
]

document.addEventListener("DOMContentLoaded", function () {
  cargarArrayAsistentes(asistentesPredeterminados);
  
} );

document.addEventListener("submit", function (evento) {
  evento.preventDefault();
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var edad = document.getElementById("edad").value;
  var persona = [ nombre, email, edad ];
  cargarRegistroTabla(persona);
  evento.target.reset();
})


function cargarArrayAsistentes(asistentes) {
  asistentes.forEach(cargarRegistroTabla);
}

function cargarRegistroTabla(persona) {
  if (persona[2] > 13 ) {
    var tabla = document.getElementById("tabla1").lastElementChild;
  } else {
    var tabla = document.getElementById("tabla2").lastElementChild;;
  }
  var fila = document.createElement("tr");
  persona.forEach(function (campo) {
    var celda = document.createElement("td");
    celda.textContent = campo;
    fila.appendChild(celda);    
  })

  tabla.appendChild(fila);

}















