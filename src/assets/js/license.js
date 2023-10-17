const headers = document.getElementsByClassName("accordion-header");

for (let header of headers) {
  header.addEventListener("click", function () {
    for (let otherHeader of headers) {
      if(otherHeader.id !== header.id) {
        const content = otherHeader.nextElementSibling;
        content.classList.remove("open");
      }
    }
    const content = header.nextElementSibling;
    content.classList.toggle("open");
    const el = document.getElementById("jump")
    el.scrollIntoView(true);
  }, false);
}
