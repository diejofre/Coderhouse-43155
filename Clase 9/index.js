const lista = document.querySelector("#listado");
const btn = document.getElementById("btn");

const pedirProductos = async () => {
  const resp = await fetch("./data.json");
  const data = await resp.json();

  data.forEach((producto) => {
    const li = document.createElement("li");
    li.innerHTML = `
          <h4>${producto.nombre}</h4>
          <p>${producto.precio}</p>
      `;
    lista.append(li);
  });
};
btn.addEventListener("click", pedirProductos);
