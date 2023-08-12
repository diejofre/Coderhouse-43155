const btn = document.getElementById("btn");
btn.addEventListener("click", showToast);

function showToast() {
  Toastify({
    text: "This is a toast",

    duration: 3000,
  }).showToast();
}
