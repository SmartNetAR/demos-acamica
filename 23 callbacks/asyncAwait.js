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

    const empleadoDB = empleados.find((empleado) => empleado.id === id)
    if (!empleadoDB) {
        throw new Error(`El empleado ${id} no existe`)
    } else {
      return empleadoDB;
    }

}

const getSalario = (empleado) => {
  return new Promise((resolve, reject) => {
    const salarioDB = salarios.find(salario => salario.id === empleado.id)
    if (!salarioDB) {
      reject(`No se encontró un salario para el empleado ${empleado.nombre}`)
    } else {
      resolve({
        nombre: empleado.nombre,
        salario: salarioDB.salario
      })
    }
  })
}

const getMensaje = async () => {
  const empleado = await getEmpleado( 3 )
  const resp = await getSalario( empleado )
  return `El salario de ${resp.nombre} es de $${resp.salario}`
}

getMensaje()
  .then( mensaje => console.log( mensaje ) )
  .catch( error => console.log( error ) )