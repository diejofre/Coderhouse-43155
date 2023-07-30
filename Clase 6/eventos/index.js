let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  //Cancelamos el comportamiento del evento
  e.preventDefault();
  //Obtenemos el elemento desde el cual se disparó el evento
  let formulario = e.target;
  //Obtengo el valor del primero hijo <input type="text">
  console.log(formulario.children[0].value);
  //Obtengo el valor del segundo hijo <input type="number">
  console.log(formulario.children[1].value);
}
