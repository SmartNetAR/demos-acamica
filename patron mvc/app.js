
window.addEventListener("load", () => {
    const articulos = new ModeloArticulos()
    const controlador = new Controller(articulos)
    
    controlador.agregar({nombre: "manzana", cantidad: 10})
    controlador.agregar({nombre: "pera", cantidad: 10})
    console.log(controlador.obtenerTodos())

    const vista = new Vista( controlador )

    vista.load()
})