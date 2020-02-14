let empleados = [
  { id: 1, nombre: "leo" },
  { id: 2, nombre: "caro" },
  { id: 3,nombre: "juan" }
];
let salarios = [
  { id: 1, salario: 2000 },
  { id: 2, salario: 3000 }
];

const getEmpleado = ( id ) => {
  return new Promise( ( resolve, reject ) => {
    const empleadoDB = empleados.find((empleado) => empleado.id === id)
    if (!empleadoDB) {
      reject( `El empleado ${id} no existe` )
    } else {
      resolve( empleadoDB )
    }
  })
}

const getSalario = ( empleado ) => {
  return new Promise( ( resolve, reject ) => {
    const salarioDB = salarios.find( salario => salario.id === empleado.id )
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

getEmpleado( 4 ).then( ( empleado ) => {
  return getSalario( empleado )
}).then( ( respuesta ) => {
  console.log( `el salario de ${respuesta.nombre} es $${respuesta.salario}` )
})
.catch( ( error ) => {
  console.log( error )
})


// getEmpleado( 2, (err, empleado) => {
//   if (err)
//     return console.error(err)
//   console.log("Empleado" , empleado )
//   // getSalario(empleado, (err, resp) => {
//   //   if (err)
//   //     return console.log(err)

//   //   console.log( `El salario de ${resp.nombre} es de $${resp.salario}` )

//   // })
// });