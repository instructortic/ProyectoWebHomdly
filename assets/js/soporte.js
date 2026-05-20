// ===============================
// soporte.js
// Acordeón de soporte
// ===============================


// Selecciona todos los botones del acordeón
const soCabs = document.querySelectorAll('#so-acordeon .so-cab');


// Recorre cada cabecera del acordeón
soCabs.forEach(function(cab) {

  // Evento al hacer clic
  cab.addEventListener('click', function() {

    // Verifica si el panel actual ya estaba abierto
    const abierto = cab.getAttribute('aria-expanded') === 'true';


    // ===============================
    // CERRAR TODOS LOS PANELES
    // ===============================

    soCabs.forEach(function(c) {

      // Cambia el estado a cerrado
      c.setAttribute('aria-expanded', 'false');

      // Elimina la clase activa
      c.classList.remove('activo');

      // Oculta el contenido del panel
      c.nextElementSibling.setAttribute('hidden', '');



      // ===============================
      // CAMBIAR FLECHA A ABAJO
      // ===============================

      // Busca el icono de flecha dentro del botón
      const icono = c.querySelector('.so-flecha');

      // Elimina la flecha hacia arriba
      icono.classList.remove('bi-chevron-up');

      // Agrega la flecha hacia abajo
      icono.classList.add('bi-chevron-down');

    });



    // ===============================
    // ABRIR PANEL ACTUAL
    // ===============================

    // Solo abre si estaba cerrado
    if (!abierto) {

      // Cambia el estado a abierto
      cab.setAttribute('aria-expanded', 'true');

      // Agrega la clase activa
      cab.classList.add('activo');

      // Muestra el contenido
      cab.nextElementSibling.removeAttribute('hidden');



      // ===============================
      // CAMBIAR FLECHA A ARRIBA
      // ===============================

      // Busca la flecha del panel actual
      const icono = cab.querySelector('.so-flecha');

      // Elimina la flecha abajo
      icono.classList.remove('bi-chevron-down');

      // Agrega la flecha arriba
      icono.classList.add('bi-chevron-up');

    }

  });

});