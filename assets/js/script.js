// ===============================
// HAMBURGUESA - abrir/cerrar menú en móvil
// ================================
// Esperar a que el DOM esté listo
/* document.addEventListener('DOMContentLoaded', function() {

  // ── Hamburguesa ──────────────────────────────
  var btn = document.getElementById('btnHamburguesa');
  var menu = document.getElementById('navMenu');

  if (btn && menu) {
    btn.addEventListener('click', function() {
      menu.classList.toggle('abierto');
      console.log('hamburguesa click, clases:', menu.className); // para verificar
    });
  } */

    
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btnHamburguesa');
    const menu = document.getElementById('navMenu');

    if (btn && menu) {
        btn.addEventListener('click', function () {
            menu.classList.toggle('abierto');
        });
    }
});

  



// ===============================
// CARRUSEL - pasa solo cada 3 segundos
// ================================

// se modifico el código para que solo se ejecute si el carrusel existe en la página, evitando errores en otras páginas sin carrusel -Carolina
// El carrusel solo se inicializa si existe en la página actual
var slides = document.querySelectorAll(".slide");
var contenedorPuntos = document.getElementById("carruselPuntos");

if (slides.length > 0 && contenedorPuntos) {

  var indiceActual = 0;

  // Crear un puntito por cada slide
  slides.forEach(function(slide, i) {
    var punto = document.createElement("button");
    punto.classList.add("punto");
    if (i === 0) punto.classList.add("activo");

    punto.addEventListener("click", function() {
      irASlide(i);
    });

    contenedorPuntos.appendChild(punto);
  });

  // Función que cambia al slide número "n"
  function irASlide(n) {
    slides[indiceActual].classList.remove("activo");
    document.querySelectorAll(".punto")[indiceActual].classList.remove("activo");
    indiceActual = n;
    slides[indiceActual].classList.add("activo");
    document.querySelectorAll(".punto")[indiceActual].classList.add("activo");
  }

  // Pasar al siguiente slide automáticamente
  function siguienteSlide() {
    var siguiente = (indiceActual + 1) % slides.length;
    irASlide(siguiente);
  }

  setInterval(siguienteSlide, 3000);

}