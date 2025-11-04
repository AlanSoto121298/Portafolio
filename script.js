//llamar el ID uno para redireccionamiento a about me 
document.addEventListener("DOMContentLoaded", () => {
    const divUno = document.getElementById("dos");

    divUno.addEventListener("click", () => {
        window.location.href = "aboutme.html";
    });
});