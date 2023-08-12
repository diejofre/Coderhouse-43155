let tareas = [];
let input = document.getElementById("tarea");
let btn = document.getElementById("btn");
let lista = document.getElementById("list");

function agregarTarea() {
  const tarea = input.value;
  tareas.push(tarea);
  input.value = "";
  Toastify({
    text: "Tarea agregada!",
    duration: 3000,
    onClick: () => {
      Toastify({
        text: "Clickeaste un Toast!",
        duration: 1500,
        position: "left",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c92d)",
        },
      }).showToast();
    },
  }).showToast();
  mostrarTareas();
}

function eliminarTarea(index) {
  Swal.fire({
    title: "¿Estás seguro/a de eliminar la tarea?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, dale",
    cancelButtonText: "Nop",
  }).then((result) => {
    if (result.isConfirmed) {
      tareas.splice(index, 1);
      mostrarTareas();
    }
  });
}

function mostrarTareas() {
  !tareas.length
    ? (lista.innerHTML = "<li>No hay tareas</li>")
    : (lista.innerHTML = "");
  tareas.forEach((tarea, index) => {
    lista.innerHTML += `
    <li>
    <span>${tarea}</span>
    <button class="delete" onclick="eliminarTarea(${index})">Eliminar</button>
    </li>
    `;
  });
}

document.addEventListener("DOMContentLoaded", mostrarTareas);
btn.addEventListener("click", agregarTarea);
