
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









