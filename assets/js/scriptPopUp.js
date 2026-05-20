// ================= POPUP BIENVENIDA =================

document.addEventListener('DOMContentLoaded', () => {

  const overlay = document.getElementById('overlay');
  const cerrar  = document.getElementById('cerrar');

  // Cerrar al hacer clic en la X
  if (cerrar && overlay) {
    cerrar.addEventListener('click', () => {
      overlay.style.display = 'none';
    });
  }

  // Cerrar al hacer clic fuera del popup
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.style.display = 'none';
    });
  }

  // ================= SLIDER =================
  const slides = document.querySelectorAll('.popup-slide');
  let currentIndex = 0;

  function mostrarSlide(i) {
    slides.forEach(s => s.classList.remove('active'));
    if (slides[i]) slides[i].classList.add('active');
  }

  const btnNext = document.getElementById('popup-next');
  const btnPrev = document.getElementById('popup-prev');

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      mostrarSlide(currentIndex);
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      mostrarSlide(currentIndex);
    });
  }

  // Auto-avance cada 4 segundos
  if (slides.length > 0) {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      mostrarSlide(currentIndex);
    }, 4000);
  }

});


/* // CERRAR POPUP
const cerrar = document.getElementById('cerrar');
const overlay = document.getElementById('overlay');

cerrar.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// SLIDER MANUAL
const slides = document.querySelectorAll('.slide');
let index = 0;

function mostrarSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
}

document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
});

document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
});

// SUBIR LOGO
const logoInput = document.getElementById('logoInput');
const logoPreview = document.getElementById('logoPreview');

logoInput.addEventListener('change', () => {
    const file = logoInput.files[0];
    if (file) {
        logoPreview.src = URL.createObjectURL(file);
    }
}); */