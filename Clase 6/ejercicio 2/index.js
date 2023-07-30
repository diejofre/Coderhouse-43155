// Primera parte del enunciado
class Usuario {
  constructor(nombre, apellido, edad) {
    (this.nombre = nombre), (this.apellido = apellido), (this.edad = edad);
  }
}

let form = document.getElementById("register");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;
  let usuario = new Usuario(nombre, apellido, edad);
  localStorage.setItem("usuario", JSON.stringify(usuario));
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("edad").value = "";
  addInfoCard();
});

const addInfoCard = () => {
  let card = document.getElementById("card");
  let usuario = JSON.parse(localStorage.getItem("usuario"));
  card.innerHTML = `<h2>Usuario: ${usuario.nombre} ${usuario.apellido}</h2>
<p>Edad: ${usuario.edad}</p>`;
};

// Segunda parte del enunciado

class Producto {
  constructor(nombre, precio) {
    (this.nombre = nombre), (this.precio = precio);
  }
}

const producto1 = new Producto("Coca", 100);
const producto2 = new Producto("Pepsi", 99);
const producto3 = new Producto("Sprite", 103);

const productos = [producto1, producto2, producto3];

localStorage.setItem("productos", JSON.stringify(productos));
