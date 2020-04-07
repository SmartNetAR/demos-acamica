class Controlador {
    constructor() {
    }

    agregar( tarea ) {
        console.log(tarea);
    }

    obtenerTodos() {
        const tareas = [
            {
                "id": 2,
                "titulo": "tarea 2",
                "duracion": 60,
                "descripcion": "descripcion dos",
                "terminada": 0,
                "usuario": "leo",
                "complejidad": "baja"
            },
            {
                "id": 4,
                "titulo": "tarea 4",
                "duracion": 66,
                "descripcion": "descripcion",
                "terminada": 1,
                "usuario": "magui",
                "complejidad": "baja"
            },
            {
                "id": 1,
                "titulo": "tarea 1",
                "duracion": 100,
                "descripcion": "descripcion de la tarea uno",
                "terminada": 1,
                "usuario": "caro",
                "complejidad": "media"
            },
            {
                "id": 3,
                "titulo": "tarea 3",
                "duracion": 55,
                "descripcion": "desc. tarea tres",
                "terminada": 0,
                "usuario": "mina",
                "complejidad": "alta"
            }
        ]

        return tareas;
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