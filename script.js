function showSection(section) {
    // Ocultar todas las secciones
    document.getElementById('proyectos').style.display = 'none';
    document.getElementById('contacto').style.display = 'none';

    // Mostrar la sección seleccionada
    if (section === 'proyectos') {
        document.getElementById('proyectos').style.display = 'flex'; // Usar 'flex' para que se alineen las imágenes
    } else if (section === 'contacto') {
        document.getElementById('contacto').style.display = 'block'; // Mostrar el correo
    }
}

// No mostrar ninguna sección al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Puedes omitir esta línea si deseas que todo esté oculto al inicio.
});
