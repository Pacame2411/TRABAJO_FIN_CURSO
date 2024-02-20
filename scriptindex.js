document.addEventListener('DOMContentLoaded', function () {
    const url = 'https://www.bbc.co.uk/radio4/programmes/schedules/fm/today.json'; // URL del JSON
    var menuBtn = document.getElementById('menu-btn');
    var menu = document.getElementById('menu');
    var cerrarMenuBtn = document.getElementById('cerrar-menu');
    let carruselIndex = 0;

    // Asegúrate de que estos selectores coincidan con tu HTML actualizado para el carrusel
    const carrusel = document.querySelector('.carrusel-container');
    const slidesCarrusel = document.querySelectorAll('.imagen-estatica');
    const totalSlidesCarrusel = slidesCarrusel.length;
    const tiempoIntervalo = 3000; // 3000 milisegundos = 3 segundos

    // Función para avanzar al siguiente slide
    function siguienteSlide() {
        carruselIndex = (carruselIndex < totalSlidesCarrusel - 1) ? carruselIndex + 1 : 0;
        carrusel.style.transform = 'translateX(' + (-carruselIndex * 100) + '%)';
    }

    // Establece un intervalo para cambiar los slides automáticamente
    setInterval(siguienteSlide, tiempoIntervalo);

    // Eventos para el menú
    menuBtn.addEventListener('click', function () {
        menu.style.right = '0';
    });

    cerrarMenuBtn.addEventListener('click', function () {
        menu.style.right = '-250px';
    });

    // Cierra el menú al hacer clic en cualquier enlace dentro del menú
    menu.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            menu.style.right = '-250px';
        }
    });

    // Eventos para el carrusel manual
    document.querySelector('#carrusel-anterior').addEventListener('click', function() {
        carruselIndex = (carruselIndex > 0) ? carruselIndex - 1 : totalSlidesCarrusel - 1;
        carrusel.style.transform = 'translateX(' + (-carruselIndex * 100) + '%)';
    });

    document.querySelector('#carrusel-siguiente').addEventListener('click', function() {
        siguienteSlide(); // Usa la función para avanzar al siguiente slide
    });

    

});


