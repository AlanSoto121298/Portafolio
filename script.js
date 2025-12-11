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


document.addEventListener("DOMContentLoaded",()=>{
    const divTres = document.getElementById("contact");

    divTres.addEventListener("click",() =>{
        window.location.href = "contact.html";
    });
});



// BOTONES PARA REGRESAR A INDEX HTML
document.addEventListener("DOMContentLoaded",()=>{
    const divTres = document.getElementById("back");

    divTres.addEventListener("click",() =>{
        window.location.href = "index.html";
    });
});


//Una alerta nomas cuando den click al nombre:)
nombre.addEventListener("click",() =>{
    alert("Hola, es un gusto:)")
})


 //CODIGO PARA CARRUSEL ( AUN POR SABER SI APLICARLO O NO )
/* 
let index = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
  document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
}, 3000);
 */

