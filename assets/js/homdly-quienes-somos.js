/* ============================================
   HOMDLY – Quiénes Somos | JavaScript
   - Intersection Observer (fade-in al scroll)
   - Stagger animado en cards de valores
   - Hover ripple suave en mv-cards
   ============================================ */

(function () {
  'use strict';

  /* ── 1. Fade-in con Intersection Observer ── */
  const fadeEls = document.querySelectorAll('.fade-in');

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target); // una sola vez
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  fadeEls.forEach((el) => fadeObserver.observe(el));


  /* ── 2. Stagger en cards de valores ── */
  const valorCards = document.querySelectorAll('.valor-card');

  const staggerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index ?? 0);
          const delay = index * 90; // ms entre cada card
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, delay);
          staggerObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  valorCards.forEach((card) => {
    // Estado inicial para stagger independiente del .fade-in padre
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = 'opacity .55s ease, transform .55s ease, box-shadow .28s ease, border-color .28s ease';
    staggerObserver.observe(card);
  });


  /* ── 3. Ripple suave al hacer click en valor-card ── */
  valorCards.forEach((card) => {
    card.addEventListener('click', function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(34, 197, 94, 0.18);
        transform: translate(-50%, -50%);
        animation: rippleAnim .6s ease-out forwards;
        pointer-events: none;
        z-index: 0;
      `;

      // Inyectar CSS de keyframe solo una vez
      if (!document.getElementById('ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
          @keyframes rippleAnim {
            to { width: 300px; height: 300px; opacity: 0; }
          }
        `;
        document.head.appendChild(style);
      }

      card.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });


  /* ── 4. Smooth scroll para cualquier ancora interna ── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  /* ── 5. Preload de imágenes para evitar layout shift ── */
  document.querySelectorAll('.qs-block__img-wrap img').forEach((img) => {
    if (img.complete) return;
    img.closest('.qs-block__img-wrap').style.background = '#F3F4F6';
    img.addEventListener('load', () => {
      img.closest('.qs-block__img-wrap').style.background = '';
    });
  });

})();
