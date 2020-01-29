function Carrito() {
    this.articulos = []
    this.eventoCompraFinalizada  = new EventoObservable(this)
}

Carrito.prototype.agregar = function (articulo, precio) {
    this.articulos.push( { articulo, precio } )
}

Carrito.prototype.finalizarCompra = function() {
    console.log(this.articulos)
    this.articulos = []
    this.eventoCompraFinalizada.notificar()
}