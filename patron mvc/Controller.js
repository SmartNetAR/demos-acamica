class Controller {
    constructor( modelo ) {
        this.articulos = modelo
    }
    agregar( articulo ) {
        this.articulos.agregarArticulo(articulo)
    }
    
    obtenerTodos() {
        return this.articulos.devolverArticulos()
    }

    obtenerUno( nombre ) {
        return this.articulos.devolverArticulo( nombre )
    }
}