//CAMBIAR FONDO 

const boton = document.getElementById('cambiarFondo');

// Guardamos los títulos
const h1s = document.querySelectorAll('h1');
const h2s = document.querySelectorAll('h2');

// Guardamos los colores originales de los títulos
const coloresOriginalesH1 = Array.from(h1s).map(h1 => getComputedStyle(h1).color);
const coloresOriginalesH2 = Array.from(h2s).map(h2 => getComputedStyle(h2).color);

// Guardamos el fondo original del body (tu gradiente)
const fondoOriginal = getComputedStyle(document.body).backgroundImage;

// Estado actual
let fondoBlanco = false;

boton.addEventListener('click', () => {
    if (!fondoBlanco) {
        // Cambiar fondo a blanco
        document.body.style.background = "#ffffff";

        // Cambiar solo títulos a negro
        h1s.forEach(h1 => h1.style.color = "#000000");
        h2s.forEach(h2 => h2.style.color = "#000000");

        fondoBlanco = true;
    } else {
        // Regresar fondo original
        document.body.style.background = fondoOriginal;

        // Restaurar colores originales de títulos
        h1s.forEach((h1, i) => h1.style.color = coloresOriginalesH1[i]);
        h2s.forEach((h2, i) => h2.style.color = coloresOriginalesH2[i]);

        fondoBlanco = false;
    }
});
//CAMBIAMOS EL TITULO COMO TIPO SALUDO Y REGRESAMOS AL MISMO CON SET TIME OUT

const nombreElemento = document.querySelector("#nombre");
const textoOriginal = nombreElemento.textContent;

nombreElemento.addEventListener("mouseenter", () => {
    nombreElemento.textContent = "BIENVENIDO!!";

    // Después de 5 segundos, vuelve al texto original
    setTimeout(() => {
        nombreElemento.textContent = textoOriginal;
    }, 3000);
});




//redireccionamientos de los DIVS a los demas index.
document.addEventListener("DOMContentLoaded", () => {
    const divUno = document.getElementById("aboutme");

    divUno.addEventListener("click", () => {
        window.location.href = "aboutme.html";
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const divDos = document.getElementById("projects");

    divDos.addEventListener("click", () => {
        window.location.href = "projects.html";
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const divTres = document.getElementById("contact");

    divTres.addEventListener("click", () => {
        window.location.href = "contact.html";
    });
});









