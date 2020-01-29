
(function () {
    

  var elementosP = document.getElementsByTagName("p");
  var elementosH2 = document.getElementsByTagName("h2");

  console.log(elementosP);

  var btn = document.getElementById("btn-guardar");
  btn.addEventListener("click", function () {
      var email = document.getElementById("email");
    
      var alertas = document.getElementsByClassName("alerta");
      for (var i = 0; i < alertas.length; i++ ) {
        email.parentNode.removeChild(alertas[i]);
      }
      
    
      if (email.value.indexOf("@") == -1) {
        var alerta = document.createElement("p");
        var mensaje = document.createTextNode("debe incluir una dirección válida");
        alerta.setAttribute("class", "alerta");
        alerta.appendChild(mensaje);
        email.parentNode.insertBefore(alerta, email);
      } else {
        var ol = document.getElementsByTagName("ol");
        var li = document.createElement("li");
        var text = document.createTextNode(email.value);
        li.appendChild(text);
        ol[0].appendChild(li);
        email.value="";
      }
    });


})();






// ejecuta esta función cuando se cargue el documento
window.onload = function() {}