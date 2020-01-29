var asistentesPredeterminados = [
    ["juan", "juan@mail.com", "28"],
    ["Guido", "guido@mail.com", "22"],
    ["Mia", "mia@mail.com", "16"],
    ["tiziano", "tiziano@mail.com", "5"],
    ["micaela", "micaela@mail.com", "12"],
    ["martina", "martina@mail.com", "7"],
]

$(document).ready(function () {
    cargarArrayAsistentes(asistentesPredeterminados);
});

$(document).on("submit", function (evento) {
    evento.preventDefault();
    var nombre = $("#nombre").val();
    var email = $("#email").val();
    var edad = $("#edad").val();
    var persona = [nombre, email, edad];

    cargarRegistroTabla(persona);
    evento.target.reset();
})


function cargarArrayAsistentes(asistentes) {
    asistentes.forEach(cargarRegistroTabla);
}

function cargarRegistroTabla(persona) {
    if (persona[2] > 13) {
        var tabla = $("#tabla1").last();
    } else {
        var tabla = $("#tabla2").last();
    }

    var fila = $("<tr></tr>");

    persona.forEach(function (campo) {
        var celda = $("<td>" + campo + "</td>");
        fila.append(celda);
    })
    var $boton = $("<button/>").text("Borrar").onClick(eliminarFila);

    // $boton.on('click', eliminarFila());


    fila.append($boton);

    tabla.append(fila);

}

function eliminarFila(e) {
    console.log(e);
}