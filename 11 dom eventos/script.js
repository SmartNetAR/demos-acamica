  var parrafo = document.getElementsByTagName("p");
  parrafo[0].setAttribute("align", "right");  
  document.getElementById("btn-saludar").addEventListener("click", agregarElemento);
  
  document.getElementById("btn-prueba").addEventListener("click", function (event) {
    console.log(event.target);
  });

  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e.target)
    var fruta = document.getElementById("nombre-fruta").value;
    var cantidad = document.getElementById("cantidad-fruta").value;
    var nuevoElemento = [fruta, cantidad];
    var id = frutas.push(nuevoElemento) -1;
    console.log(id);
    agregarElemento(nuevoElemento, id);
    
  })

  var frutas = [
    ["banana", 20],
    ["manzana", 15],
    ["pera", 0]
  ];

  // var tbody = document.getElementsByTagName("tbody");

  /**
  <table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
   */
  frutas.forEach(agregarElemento)

  function agregarElemento(arrayElement, idElement) {
    var tabla = document.getElementById("tabla").lastElementChild;
    var fila = document.createElement("tr");

    var celda = document.createElement("td");
    celda.textContent = idElement +1;
    fila.appendChild(celda)

    var celda = document.createElement("td");
    celda.textContent = arrayElement[0];
    fila.appendChild(celda)

    var celda = document.createElement("td");
    celda.textContent = arrayElement[1];
    fila.appendChild(celda)

    tabla.appendChild(fila);
  }
  







  var btnDespedirse = document.getElementById("btn-despedirse");
  btnDespedirse.onclick = despedirse;

  function despedirse(){
    alert("esperamos que vuelvas");
  }




