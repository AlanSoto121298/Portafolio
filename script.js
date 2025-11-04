//llamar el ID uno para redireccionamiento a about me 
document.addEventListener("DOMContentLoaded", () => {
    const divUno = document.getElementById("aboutme");

    divUno.addEventListener("click", () => {
        window.location.href = "aboutme.html";
    });
});

//llamar el ID uno para redireccionamiento a Projects
document.addEventListener("DOMContentLoaded", () => {
    const divDos = document.getElementById("projects");

    divDos.addEventListener("click", () => {
        window.location.href = "projects.html";
    });
});

//llamar el ID para el formulario
document.addEventListener("DOMContentLoaded",()=>{
    const divTres = document.getElementById("contact");

    divTres.addEventListener("click",() =>{
        window.location.href = "contact.html";
    });
});

