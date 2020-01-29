var autos = {};
var motos = {
  marca: "yamaha",
  modelo: 2012,
  patente: "JUL123"
}

async function imprimirJson() {
  const data = await fetch("autos.json");
  const jsonData = await data.json();
  autos = jsonData;
  document.getElementsByTagName("pre")[0].innerHTML = JSON.stringify(jsonData, null, 4)
  console.log(JSON.stringify(motos, null, 3) );
}
imprimirJson();

document.addEventListener("DOMContentLoaded", function () {
  (document.getElementsByTagName("body")[0]).appendChild(
    document.createElement("pre")
  )
})
