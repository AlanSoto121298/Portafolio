
//PARA REGRESAR AL INDEX.HTML
document.addEventListener("DOMContentLoaded",() =>{
    const botonProjects = document.getElementById("btn-projects");
    
    botonProjects.addEventListener("click",() => {
       window.location.href = "index.html";
    })
})



//PARA QUE AL DARLE CLICK EN PROJECTS NOS MANDA AL LINK DE LA PAGINA 

const div1 = document.querySelector("#proj1");
const div2 = document.querySelector("#proj2");
const div3 = document.querySelector("#proj3");

div1.addEventListener("click", () => {
    window.open("https://inndaka.com/", "_blank");
});

div2.addEventListener("click", () => {
    window.open("https://quiren.com.mx/", "_blank");
});

div3.addEventListener("click", () => {
    window.open("https://tromluc.up.railway.app/", "_blank");
});



