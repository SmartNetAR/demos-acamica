let empleados = [
  { id: 1, nombre: "leo" },
  { id: 2, nombre: "caro" },
  { id: 3,nombre: "juan" }
];
let salarios = [
  { id: 1, salario: 2000 },
  { id: 2, salario: 3000 }
];

const getEmpleado = (id, callBack) => {
  const empleadoDB = empleados.find((empleado) => empleado.id === id)
  if (!empleadoDB) {
    callBack(`El empleado ${id} no existe`)
  } else {
    callBack(null, empleadoDB);
  }
}

const getSalario = ( empleado, callBack ) => {
  const salarioDB = salarios.find( salario => salario.id === empleado.id )
  if (!salarioDB) {
    callBack(`No se encontró un salario para el empleado ${empleado.nombre}`)
  } else {
    callBack( null, {
      nombre: empleado.nombre,
      salario: salarioDB.salario
    })
  }
}

getEmpleado( 3, (err, empleado) => {
  if (err)
    return console.error(err)

  getSalario(empleado, (err, resp) => {
    if (err)
      return console.log(err)

    console.log( `El salario de ${resp.nombre} es de $${resp.salario}` )

  })
});