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


//llamar el ID para regresar en aboutme a index.html
document.addEventListener("DOMContentLoaded",()=>{
    const divTres = document.getElementById("back");

    divTres.addEventListener("click",() =>{
        window.location.href = "index.html";
    });
});


let index = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
  document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
}, 3000);
