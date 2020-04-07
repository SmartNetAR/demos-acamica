class Vista {
    constructor( controlador ) {
        this.controlador = controlador
    }
    load() {
        const data = this.controlador.obtenerTodos()
        this.render( data )

        document.addEventListener("submit", (evento) => {
            evento.preventDefault();
            var titulo = document.getElementById("titulo").value;
            var descripcion = document.getElementById("descripcion").value;
            var complejidad = parseInt(document.getElementById("complejidad").value);
            var persona = {titulo, descripcion, complejidad};
            this.controlador.agregar(persona);
            evento.target.reset();

            })
    }
    
    render( tareas ) {
        borrarTablas();
        tareas.forEach(cargarRegistroTabla);
    }
}

function cargarRegistroTabla(tarea) {

    var tabla = document.getElementById("tabla1").lastElementChild;

    var fila = document.createElement("tr");

      var celda = document.createElement("td");
      celda.textContent = tarea.titulo;
      fila.appendChild(celda);

      var celda = document.createElement("td");
      celda.textContent = tarea.descripcion;
      fila.appendChild(celda);
      
      var celda = document.createElement("td");
      celda.textContent = tarea.complejidad;
      fila.appendChild(celda);
  
    tabla.appendChild(fila);
  
}

function borrarTablas() {
    document.getElementById("tabla1").lastElementChild.innerHTML = "";
}