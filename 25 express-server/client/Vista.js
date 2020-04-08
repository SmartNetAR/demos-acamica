class Vista {
    constructor( controlador ) {
        this.controlador = controlador
    }
    async load() {
        const data = await this.controlador.obtenerTodos()
        this.render( data )

        // this.controlador.obtenerTodos()
        //     .then( ( tareas ) => {
        //         this.render( tareas )
        //     });
        

        document.addEventListener("submit", (evento) => {
            evento.preventDefault();
            var titulo = document.getElementById("titulo").value;
            var descripcion = document.getElementById("descripcion").value;
            var complejidad = parseInt(document.getElementById("complejidad").value);
            var tarea = {titulo, descripcion, complejidad};
            this.controlador.agregar(tarea);
            evento.target.reset();

            })
    }
    
    render( tareas ) {
        console.log("tareas", tareas )
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