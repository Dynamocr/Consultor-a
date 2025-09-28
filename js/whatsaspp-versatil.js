document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname.split("/").pop();
  let serviceLinks = document.querySelectorAll(".service-list a");
  let materiaActiva = "nuestros servicios"; // valor por defecto

  serviceLinks.forEach(link => {
    let href = link.getAttribute("href");

    if (href === currentPage) {
      // marcar el <li> como activo
      link.parentElement.classList.add("active");
      materiaActiva = link.textContent.replace("-", "").trim(); // toma el texto limpio
    } else {
      link.parentElement.classList.remove("active");
    }
  });

  // Actualiza el enlace de WhatsApp
  let btnWhats = document.querySelector(".btn-whatsapp-custom");
  if (btnWhats) {
    let mensaje = `Hola, estoy interesado en recibir asesoría sobre ${materiaActiva}. ¿Podrían darme más información?`;
    let url = `https://wa.me/51941158921?text=${encodeURIComponent(mensaje)}`;
    btnWhats.setAttribute("href", url);
  }
});
