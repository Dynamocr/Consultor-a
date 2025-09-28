document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".staff-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            992: { slidesPerView: 3 }, // pantallas grandes
            768: { slidesPerView: 2 }, // tablets
            0: { slidesPerView: 1 }    // móviles
        }
    });

    // Pausar autoplay al hacer hover sobre las tarjetas
    const staffCards = document.querySelectorAll('.staff-card');

    staffCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            swiper.autoplay.stop(); // pausa
        });

        card.addEventListener('mouseleave', () => {
            swiper.autoplay.start(); // reanuda
        });
    });
});
