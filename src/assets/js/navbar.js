
console.log("called")
const button = document.getElementById("collapse-button");
const navbar = document.getElementById("collapseExample");
console.log(button)
console.log(navbar)

button.addEventListener("click", function () {
  navbar.classList.toggle("collapse");
})
