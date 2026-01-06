//CAMBIAR FONDO 
 const fondos = [
    'linear-gradient(135deg, #000000 0%, #000000 80%, #002200 90%, #004400 100%)',
    'linear-gradient(135deg, #ff0000 0%, #ff5500 50%, #ffaa00 100%)',
    'linear-gradient(135deg, #000044 0%, #004466 50%, #00aaaa 100%)',
    'linear-gradient(135deg, #222222 0%, #555555 50%, #888888 100%)'
  ];

  let indice = 0; // empieza con el primer fondo

  const boton = document.getElementById('cambiarFondo');

  boton.addEventListener('click', () => {
    // cambiar el índice al siguiente fondo
    indice++;
    if (indice >= fondos.length) {
      indice = 0; // volver al primero si llegamos al final
    }

    // aplicar el fondo al body
    document.body.style.background = fondos[indice];
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


document.addEventListener("DOMContentLoaded",()=>{
    const divTres = document.getElementById("contact");

    divTres.addEventListener("click",() =>{
        window.location.href = "contact.html";
    });
});









