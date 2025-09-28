document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname.split("/").pop();
  let links = document.querySelectorAll(".navbar-nav a");

  links.forEach(link => {
    let href = link.getAttribute("href");

    // Verifica coincidencia exacta con la página actual
    if (href === currentPage) {
      link.classList.add("active");

      // Si está dentro de un dropdown, también marca el padre
      let parentDropdown = link.closest(".dropdown");
      if (parentDropdown) {
        parentDropdown.querySelector(".nav-link.dropdown-toggle").classList.add("active");
      }
    } else {
      link.classList.remove("active");
    }
  });
});

