/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import * as bootstrap from 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
/**
 * Write any other JavaScript below
 */



// Configuración del menú de hamburguesa
const hamburguesa = document.querySelector(".header__hamburguesa");
const navlinks = document.querySelector(".header__navigation");

if (hamburguesa && navlinks) {
    hamburguesa.addEventListener("click", () => {
        navlinks.classList.toggle("active");
    });
} else {
    console.error("Elementos del menú de hamburguesa no encontrados en el DOM.");
}


// Configuración de popover del boton
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popoverTriggerEl) => {
    new bootstrap.Popover(popoverTriggerEl, {
        customClass: 'popover-custom',
    });
});

// Configuración de la dependencia AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000, // Duración de las animaciones en milisegundos
        easing: 'ease-in-out', // Tipo de easing
        once: true, // Si la animación debe ocurrir solo una vez
        mirror: false, // Animar los elementos mientras se hace scroll hacia atrás
    });
});
