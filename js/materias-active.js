
document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname.split("/").pop();
  let serviceLinks = document.querySelectorAll(".service-list a");

  serviceLinks.forEach(link => {
    let href = link.getAttribute("href");

    if (href === currentPage) {
      // marcar el <li> como activo
      link.parentElement.classList.add("active");
    } else {
      link.parentElement.classList.remove("active");
    }
  });
});

