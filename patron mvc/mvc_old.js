// model
class ModeloArticulos {
    constructor() {
        this.articulos = [
            {
                nombre: "manzana",
                cantidad: 2
            },
            {
                nombre: "banana",
                cantidad: 10
            }
        ]
    }
    agregarArticulo(articulo) {
        this.articulos.push(articulo)
    }

    obtenerArticulos() {
        return this.articulos
    }
}

// controller
class Controller {
    constructor()
    {
        this.articulos = new ModeloArticulos
    }
    agregar({nombre, cantidad}) {
        this.articulos.agregarArticulo(
            {
                nombre,
                cantidad,
            })
        return (this.articulos.obtenerArticulos())
    }
}


window.addEventListener("load", () => {
    const controller = new Controller()
    const vista = new Vista(controller)
    vista.load()
    

})

// view
class Vista {
    constructor( controller ) {
        this.controller = controller
    }
    load() {
        const btnAdd = document.getElementById('agregar')
        btnAdd.addEventListener('click', () => {
            const articulos = this.controller.agregar(
                {
                    nombre: document.getElementById('producto').value,
                    cantidad: document.getElementById('cantidad').value
                })
            this.render( articulos )
        })
    }
    render(articulos) {
        document.getElementById('lista').innerHTML = 
        articulos.map( articulo => `<li>${articulo.nombre}</li>`).join('')
    }
}