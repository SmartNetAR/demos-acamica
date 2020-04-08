class Controlador {
    constructor() {
    }

    agregar( tarea ) {
        console.log(tarea);
    }

    // obtenerTodos() {
    //     return fetch("http://localhost:5000/tareas")
    //         .then( function( respuesta ) {
    //             return respuesta.json()
    //         })
    //         .then( function ( tareas ) {
    //             return tareas
    //         } )
    // }

    async obtenerTodos() {
        const respuesta = await fetch("http://localhost:5000/tareas")
        return await respuesta.json()

    }

    obtenerUno( id ) {
        const tarea = {
            "id": 2,
            "titulo": "tarea 2",
            "duracion": 60,
            "descripcion": "descripcion dos",
            "terminada": 0,
            "usuario": "leo",
            "complejidad": "baja"
        }
        return tarea;
    }

    borrar ( id ) {
        
    }
}