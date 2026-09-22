/* =========================================
   HABLEMOS DE LA VIDA
   APP.JS
========================================= */


/* =========================================
   ELEMENTOS
========================================= */

const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");


/* =========================================
   NAVBAR AL HACER SCROLL
========================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   MENU MOBILE
========================================= */

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* =========================================
   CERRAR MENU AL SELECCIONAR
========================================= */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   LINK ACTIVO
========================================= */

const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   ANIMACIONES AL APARECER
========================================= */

const observerOptions = {

    threshold: 0.12

};


const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    observerOptions
);


const animatedElements = document.querySelectorAll(
    ".intro-card, .age-card, .signal-item, .help-step, .myth-card, .resource-card"
);


animatedElements.forEach(element => {

    element.classList.add("hidden-animation");

    observer.observe(element);

});


/* =========================================
   ESTILOS DINÁMICOS PARA ANIMACIÓN
========================================= */

const animationStyle = document.createElement("style");

animationStyle.textContent = `

    .hidden-animation {
        opacity: 0;
        transform: translateY(25px);
        transition:
            opacity 0.6s ease,
            transform 0.6s ease;
    }

    .hidden-animation.show {
        opacity: 1;
        transform: translateY(0);
    }

`;

document.head.appendChild(animationStyle);


/* =========================================
   BOTONES DE TARJETAS
========================================= */

const cardLinks = document.querySelectorAll(".age-card .card-link");

cardLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        alert(
            "Esta sección estará disponible próximamente."
        );

    });

});


/* =========================================
   BOTONES DE RECURSOS
========================================= */

const resourceLinks = document.querySelectorAll(
    ".resource-card a"
);

resourceLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        alert(
            "Estamos preparando información oficial y actualizada para esta sección."
        );

    });

});


/* =========================================
   CARGA INICIAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("======================================");
    console.log("     HABLEMOS DE LA VIDA");
    console.log("======================================");
    console.log("Página cargada correctamente.");
    console.log("Prevención | Acompañamiento | Esperanza");

});