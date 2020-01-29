class Vista {
    constructor( controlador ) {
        this.controlador = controlador
    }
    load() {
        const data = this.controlador.obtenerTodos()
        this.render( data )

        document.getElementById('agregar').addEventListener('click', () => {
            const producto = document.getElementById('producto').value
            const cantidad = document.getElementById('cantidad').value

            this.controlador.agregar({
                nombre: producto,
                cantidad: cantidad
            })
            
            const data = this.controlador.obtenerTodos()
            this.render( data )    
        })
    }
    render( articulos ) {
        document.getElementById('lista').innerHTML= 
        articulos.map( articulo => `<li>${articulo.nombre}</li>`).join('')
    }
}