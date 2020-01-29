document.addEventListener("DOMContentLoaded", function () {
  // console.log(estudiantes);
  document.getElementsByTagName("body")[0].appendChild(
    document.createElement("pre")
  )
  document.getElementsByTagName("pre")[0].innerHTML= JSON.stringify(estudiantes, null, 2);
  // console.log(JSON.stringify(estudiantes, undefined, "---"));

  leerEstudiantes().then(
    function (data) {
      document.getElementsByTagName("pre")[0].innerHTML= JSON.stringify(data, null, 2);
      console.log(data.aula1)
    }
  ).catch( error => {
      console.error("no se pudo leer el archivo")
      console.error(error)
    }
  );

})
var estudiantes = [
  {
    nombre: "juan",
    email: "juan@mail.com",
    edad: "25",
    fechaNacimiento: "24/03/1900"
  },
  {
    nombre: "maria",
    email: "juan@mail.com",
    edad: "25"
  }
];


async function leerEstudiantes() {
  try {
    const data = await fetch("estudiantesExterno.json");
    const jsonData = await data.json() ;
    return jsonData;
  } catch (error) {
    throw("no funciona")
  }
}

