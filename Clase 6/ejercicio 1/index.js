let tareas = [];
let input = document.getElementById("tarea");
let btn = document.getElementById("btn");
let lista = document.getElementById("list");

function agregarTarea() {
  const tarea = input.value;
  tareas.push(tarea);
  input.value = "";
  mostrarTareas();
}

function eliminarTarea(index) {
  tareas.splice(index, 1);
  mostrarTareas();
}

function mostrarTareas() {
  lista.innerHTML = "";
  tareas.forEach((tarea, index) => {
    lista.innerHTML += `
      <li>
        <span>${tarea}</span>
        <button class="delete" onclick="eliminarTarea(${index})">Eliminar</button>
      </li>
    `;
  });
}

btn.addEventListener("click", agregarTarea);
