// const btn = document.getElementById("btn");
// btn.addEventListener("click", fireSweetAlert);

// function fireSweetAlert() {
//   Swal.fire("Good job!", "You clicked the button!", "success");
// }

Swal.fire({
  title: "Sweet!",
  text: "Modal with a custom image.",
  imageUrl: "https://unsplash.it/400/200",
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Custom image",
});
