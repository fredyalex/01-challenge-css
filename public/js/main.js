document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('cambiarColorBtn');
    const cuerpo = document.body;
    const mensaje = document.getElementById('mensajeJS');

    mensaje.textContent = '¡El JavaScript se ha cargado correctamente!';

    boton.addEventListener('click', () => {
        // Al hacer clic, alterna la clase 'fondo-azul' del body
        cuerpo.classList.toggle('fondo-azul');

        if (cuerpo.classList.contains('fondo-azul')) {
            mensaje.textContent = '¡El color de fondo ahora es azul!';
        } else {
            mensaje.textContent = '¡El color de fondo volvió al estado inicial!';
        }
    });

    // ¡Prueba agregando un console.log aquí y guárdalo para ver la recarga!
    console.log("Aplicación iniciada. ¡Listo para aprender!");
});