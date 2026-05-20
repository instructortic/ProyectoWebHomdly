// ── 1. SELECCIONAMOS todos los elementos con clase "stat-number"
const contadores = document.querySelectorAll('.stat-number');



//
function animarContador(elemento, objetivo, duracion) {

  let inicio = null;       // marca de tiempo del primer frame
  let actual = 0;          // valor actual del contador

  // requestAnimationFrame llama a "paso" en cada frame del navegador (~60fps)
  function paso(timestamp) {

    // Al primer frame, guardamos el tiempo de inicio
    if (!inicio) inicio = timestamp;

    // Calculamos cuánto tiempo ha pasado desde el inicio
    const tiempoPasado = timestamp - inicio;

    // Calculamos el progreso de 0 a 1 (cuánto % de la duración ha transcurrido)
    const progreso = Math.min(tiempoPasado / duracion, 1);

    // Aplicamos una curva "ease-out" para que empiece rápido y desacelere al final
    // La fórmula  1 - (1 - t)^3  es una curva suave muy agradable visualmente
    const progresoSuave = 1 - Math.pow(1 - progreso, 3);
    
    // Calculamos el número actual y lo redondeamos al entero más cercano
    actual = Math.round(progresoSuave * objetivo);

    // Mostramos el número en pantalla
    elemento.textContent = actual;

    // Si aún no llegamos al final, pedimos otro frame
    if (progreso < 1) {
      requestAnimationFrame(paso);
    } else {
      // Aseguramos que el número final sea exactamente el objetivo
      elemento.textContent = objetivo;

      // Agregamos la clase "done" para activar el efecto de brillo dorado
      elemento.classList.add('done');
    }
  }

  // Iniciamos la animación
  requestAnimationFrame(paso);
}


// ── 3. INTERSECTION OBSERVER
//    Detecta cuando las tarjetas entran en el viewport
//    y solo entonces dispara la animación.
//    Así el usuario siempre ve la cuenta desde 0.

const opciones = {
  root: null,          // el viewport del navegador
  rootMargin: '0px',
  threshold: 0.3,      // se activa cuando el 30% de la tarjeta es visible
};

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    // Solo actuamos cuando el elemento ENTRA en pantalla
    if (entry.isIntersecting) {

      const span = entry.target;

      // Leemos el número objetivo desde el atributo HTML data-target
      const objetivo = parseInt(span.getAttribute('data-target'), 10);

      // Duración de la animación: 2 segundos
      const duracion = 2000;

      // Lanzamos la animación
      animarContador(span, objetivo, duracion);

      // Dejamos de observar este elemento (para que no se repita)
      observer.unobserve(span);
    }
  });

}, opciones);


// ── 4. REGISTRAMOS cada contador en el observer
contadores.forEach((contador) => {
  observer.observe(contador);
});
/* ===========================
   AGENTES CAROUSEL — script.js
   =========================== */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', initAgentesCarousel);

  function initAgentesCarousel() {
    const section = document.querySelector('.agentes-section');
    if (!section) return;

    /* ── 1. Tomar las tarjetas existentes ── */
    const oldGrid = section.querySelector('.agentes-grid');
    const cards = oldGrid ? Array.from(oldGrid.querySelectorAll('.agente-card')) : [];
    if (cards.length === 0) return;

    /* ── 2. Construir el HTML del carrusel ── */
    const wrapper = document.createElement('div');
    wrapper.className = 'agentes-carousel-wrapper';

    const btnPrev = document.createElement('button');
    btnPrev.className = 'agentes-btn agentes-btn-prev';
    btnPrev.setAttribute('aria-label', 'Anterior');
    btnPrev.innerHTML =
      '<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>';

    const btnNext = document.createElement('button');
    btnNext.className = 'agentes-btn agentes-btn-next';
    btnNext.setAttribute('aria-label', 'Siguiente');
    btnNext.innerHTML =
      '<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>';

    const trackOuter = document.createElement('div');
    trackOuter.className = 'agentes-track-outer';

    const track = document.createElement('div');
    track.className = 'agentes-track';

    cards.forEach(function (card) { track.appendChild(card); });

    trackOuter.appendChild(track);
    wrapper.appendChild(btnPrev);
    wrapper.appendChild(trackOuter);
    wrapper.appendChild(btnNext);

    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'agentes-dots';
    wrapper.appendChild(dotsContainer);

    oldGrid.replaceWith(wrapper);

    /* ── 3. Estado y helpers ── */
    let currentIndex = 0;
    const total = cards.length;

    function getVisibleCount() {
      const w = window.innerWidth;
      if (w <= 600) return 2;
      if (w <= 900) return 3;
      return 4;
    }

    function getMaxIndex() {
      return Math.max(0, total - getVisibleCount());
    }

    function getGap() {
      return parseFloat(window.getComputedStyle(track).gap) || 20;
    }

    /* ── 4. Dots ── */
    var dots = [];

    function buildDots() {
      dotsContainer.innerHTML = '';
      dots = [];
      const count = getMaxIndex() + 1;
      for (let i = 0; i < count; i++) {
        const dot = document.createElement('button');
        dot.className = 'agentes-dot' + (i === currentIndex ? ' active' : '');
        dot.setAttribute('aria-label', 'Ir al grupo ' + (i + 1));
        dot.addEventListener('click', function () { goTo(i); });
        dotsContainer.appendChild(dot);
        dots.push(dot);
      }
    }

    /* ── 5. Navegación ── */
    function goTo(index) {
      const maxIndex = getMaxIndex();
      currentIndex = Math.max(0, Math.min(index, maxIndex));

      const cardWidth = cards[0].offsetWidth;
      const gap = getGap();
      track.style.transform = 'translateX(-' + (currentIndex * (cardWidth + gap)) + 'px)';

      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === currentIndex);
      });

      btnPrev.disabled = currentIndex === 0;
      btnNext.disabled = currentIndex >= maxIndex;
    }

    function goNext() {
      goTo(currentIndex >= getMaxIndex() ? 0 : currentIndex + 1);
    }

    btnPrev.addEventListener('click', function () {
      resetAutoplay();
      goTo(currentIndex - 1);
    });

    btnNext.addEventListener('click', function () {
      resetAutoplay();
      goTo(currentIndex + 1);
    });

    /* ── 6. Autoplay ── */
    const AUTOPLAY_DELAY = 3500;
    let autoplayTimer = null;
    let paused = false;

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(function () {
        if (!paused) goNext();
      }, AUTOPLAY_DELAY);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    function resetAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    /* Pausar al pasar el mouse */
    wrapper.addEventListener('mouseenter', function () { paused = true; });
    wrapper.addEventListener('mouseleave', function () { paused = false; });

    /* Pausar si la pestaña no es visible */
    document.addEventListener('visibilitychange', function () {
      paused = document.hidden;
    });

    /* ── 7. Touch / swipe ── */
    let startX = 0;
    let isDragging = false;

    trackOuter.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      isDragging = true;
      paused = true;
    }, { passive: true });

    trackOuter.addEventListener('touchend', function (e) {
      if (!isDragging) return;
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        resetAutoplay();
        if (diff > 0) goTo(currentIndex + 1);
        else goTo(currentIndex - 1);
      }
      isDragging = false;
      paused = false;
    }, { passive: true });

    /* ── 8. Resize ── */
    let resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        buildDots();
        goTo(currentIndex);
      }, 150);
    });

    /* ── 9. Arranque ── */
    buildDots();
    goTo(0);
    startAutoplay();
  }
})();


