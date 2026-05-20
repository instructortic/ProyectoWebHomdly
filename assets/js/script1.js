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


var slides = document.querySelectorAll(".slide");
var contenedorPuntos = document.getElementById("carruselPuntos");
var indiceActual = 0;

// Crear un puntito por cada slide
slides.forEach(function(slide, i) {
  var punto = document.createElement("button");
  punto.classList.add("punto");
  if (i === 0) punto.classList.add("activo"); // primer puntito activo
  
  // Al hacer clic en un punto, ir a ese slide
  punto.addEventListener("click", function() {
    irASlide(i);
  });

  contenedorPuntos.appendChild(punto);
});

// Función que cambia al slide número "n"
function irASlide(n) {
  // Quitar "activo" del slide y punto actual
  slides[indiceActual].classList.remove("activo");
  document.querySelectorAll(".punto")[indiceActual].classList.remove("activo");

  // Actualizar índice
  indiceActual = n;

  // Poner "activo" en el nuevo slide y punto
  slides[indiceActual].classList.add("activo");
  document.querySelectorAll(".punto")[indiceActual].classList.add("activo");
}

// Pasar al siguiente slide automáticamente
function siguienteSlide() {
  var siguiente = (indiceActual + 1) % slides.length; // vuelve al 0 al llegar al final
  irASlide(siguiente);
}

// Cambiar cada 3000 ms = 3 segundos
// Para cambiar el tiempo, edita el número 3000
setInterval(siguienteSlide, 3000);