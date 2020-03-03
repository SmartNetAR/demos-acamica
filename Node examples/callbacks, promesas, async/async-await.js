let empleados = [
  { id: 1, nombre: "leo" },
  { id: 2, nombre: "caro" },
  { id: 3,nombre: "juan" }
];
let salarios = [
  { id: 1, salario: 2000 },
  { id: 2, salario: 3000 }
];

const getEmpleado = async (id) => {
  const empleadoDB = await empleados.find((empleado) => empleado.id === id)
  if (!empleadoDB) {
      throw new Error(`El empleado ${id} no existe`)
  }
  return (empleadoDB);

}

const getSalario = async (empleado) => {
  const salarioDB = salarios.find(salario => salario.id === empleado.id)
  if (!salarioDB) {
    throw new Error(`No se encontró un salario para el empleado ${empleado.nombre}`)
  } else {
    return{
      nombre: empleado.nombre,
      salario: salarioDB.salario
    }
  }
}

async function mostrarInfo() {
    const empleado = await getEmpleado( 4 )
    const resp = await getSalario( empleado )

    return (`El salario de ${resp.nombre} es de $${resp.salario}`)

}

mostrarInfo()
  .then( mensaje => console.log(mensaje))
  .catch( error => console.log( error ))

