// localStorage.setItem("usuario", "Juan");
// let usuario;
let usuarioEnLS = localStorage.getItem("usuario");

// Si había algo almacenado, lo recupero. Si no le pido un ingreso
if (usuarioEnLS) {
  usuario = usuarioEnLS;
} else {
  usuario = prompt("Ingrese su nombre de usuario");
}
