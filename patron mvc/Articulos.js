class ModeloArticulos {
    constructor() {
        this.articulos = []
    }
    agregarArticulo( articulo ) {
        this.articulos.push ( articulo )
    }
    devolverArticulos() {
        return this.articulos
    }
    devolverArticulo( nombre ) {
        return this.articulos.filter(
            articulo => articulo.nombre == nombre
        )
    }
}
