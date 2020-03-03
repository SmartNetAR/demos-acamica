let empleados = [
  { id: 1, nombre: "leo" },
  { id: 2, nombre: "caro" },
  { id: 3,nombre: "juan" }
];
let salarios = [
  { id: 1, salario: 2000 },
  { id: 2, salario: 3000 }
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleadoDB = empleados.find((empleado) => empleado.id === id)
    if (!empleadoDB) {
      setTimeout( () => {
        reject(`El empleado ${id} no existe`)
      }, 1500)
    } else {
      resolve(empleadoDB);
    }
  })
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

getEmpleado( 2 ).then((empleado) => {
  return getSalario(empleado)
}).then(resp => {
  console.log(`El salario de ${resp.nombre} es de $${resp.salario}`)
}).catch((err) => {
  console.error(err)
})