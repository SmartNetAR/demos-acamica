  var parrafo = document.getElementsByTagName("p");
  parrafo[0].setAttribute("align", "right");  
  document.getElementById("btn-saludar").addEventListener("click", agregarElemento);

  var frutas = ["banana", "manzana", "pera"];

  frutas.forEach(agregarElemento)

  function agregarElemento(textoElemento) {
    var lista = document.getElementById("lista");

    var el = document.createElement("li");
    var contenido = document.createTextNode(textoElemento);
    el.appendChild(contenido);
    lista.appendChild(el);
  }
  







  var btnDespedirse = document.getElementById("btn-despedirse");
  btnDespedirse.onclick = despedirse;

  function despedirse(){
    alert("esperamos que vuelvas");
  }




