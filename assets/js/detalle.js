//array con las 7 fotos de la propiedad
// Cada objeto tiene:URL de la imagen
const fotos = [
  { src: 'https://umbral.co/wp-content/uploads/2021/11/DSC9262-P2.png', label: 'Sala principal' },
  { src: 'https://umbral.co/wp-content/uploads/2021/11/laurel-internas-22-1.jpg', label: 'Cocina integral' },
  { src: 'https://umbral.co/wp-content/uploads/2021/11/DSC0980-1200x801.jpg', label: 'Habitación principal' },
  { src: 'https://umbral.co/wp-content/uploads/2021/11/menta-interior-10.jpg', label: 'Baño completo' },
  { src: 'https://gprovivienda.com/wp-content/uploads/2019/03/provivienda-van-gogh-modelo-D-sala-comedor-2.jpg', label: 'Balcón' },
  { src: 'https://images.ctfassets.net/8lc7xdlkm4kt/6bYolzLQSPgZawCDlHb9qr/ca35368f17fc3143fe969c9b074a73de/mint-apartamentos-barranquilla-sala.jpg', label: 'Segundo ambiente' },
  { src: 'https://img.properati.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiJjNmNhYzQ3My04YTMwLTQzMWYtYTcxMi05NzkwZTEyYmIwZmEvYzZjYWM0NzMtOGEzMC00MzFmLWE3MTItOTc5MGUxMmJiMGZhX2Y5ZGExNzViLTdmMGQtNGVmYi04MmY0LWVlMTdlMmNhMTY2Yy5qcGciLCJicmFuZCI6InByb3BlcmF0aSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo2NDAsImhlaWdodCI6NDgwLCJmaXQiOiJjb3ZlciJ9fX0=', label: 'Vista exterior' }
];


//  variables que recuerdan en qué foto estamos
//   activeIndex → foto activa en la galería principal
//   modalIndex  → foto activa dentro del modal

let activeIndex = 0;
let modalIndex  = 0;


// getElementById busca el elemento por su id y lo guarda

const mainImg          = document.getElementById('mainImg');          // <img> de la foto grande
const imgCounter       = document.getElementById('imgCounter');       // contador "1 / 7"
const mainImgWrap      = document.getElementById('mainImgWrap');      // contenedor de la foto grande
const thumbsCol        = document.getElementById('thumbsCol');        // columna de miniaturas
const modalOverlay     = document.getElementById('modalOverlay');     // fondo oscuro del modal
const modalMainImg     = document.getElementById('modalMainImg');     // <img> grande dentro del modal
const modalCounterText = document.getElementById('modalCounterText'); // contador del modal "1 / 7"
const modalThumbs      = document.getElementById('modalThumbs');      // fila de miniaturas del modal
const modalPrev        = document.getElementById('modalPrev');        // flecha ← del modal
const modalNext        = document.getElementById('modalNext');        // flecha → del modal
const modalClose       = document.getElementById('modalClose');       // botón ✕ del modal
const btnVisita        = document.getElementById('btnVisita');        // botón "Solicitar una visita"


// buildThumbsCol()
// Construye las 3 miniaturas de la galería principal usando DOM porque No están escritas en el HTML, se crean aquí con JavaScript

function buildThumbsCol() {
  thumbsCol.innerHTML = ''; 

  for (let i = 1; i <= 3; i++) { // recorre fotos[1], fotos[2] y fotos[3]

    // Crea el div contenedor de cada miniatura
    const div = document.createElement('div');
    div.className     = 'thumb'; 
    div.dataset.index = i;       

    // Crea la imagen y le asigna la URL del array fotos
    const img = document.createElement('img');
    img.src = fotos[i].src;
    img.alt = fotos[i].label;
    div.appendChild(img); // mete el <img> dentro del <div>

    if (i === 3) {
      // La tercera miniatura lleva el overlay oscuro con "+N"
      const remaining = fotos.length - 3; // calcula cuántas fotos no se ven (7 - 3 = 4)
      const ov = document.createElement('div');
      ov.className   = 'more-overlay';
      ov.textContent = '+' + remaining; // muestra "+4"
      div.appendChild(ov);
      // Al hacer clic en el +N, abre el modal en esa foto
      div.addEventListener('click', () => openModal(i));
    } else {
      // Las miniaturas 1 y 2 cambian la foto principal al hacer clic
      div.addEventListener('click', () => setMainImage(i));
    }

    thumbsCol.appendChild(div); // agrega la miniatura al DOM
  }
}


// setMainImage(index)
// Cambia la foto grande de la galería principal
// Hace un efecto fade: desvanece → cambia src → reaparece

function setMainImage(index) {
  mainImg.classList.add('fade'); // agrega clase fade → CSS lo pone en opacity: 0

  setTimeout(() => { // espera 200ms que dura la animación de desvanecido

    activeIndex            = index;             // actualiza el estado
    mainImg.src            = fotos[index].src;  // ← AQUÍ CAMBIA LA FOTO (reemplaza el src)
    mainImg.alt            = fotos[index].label;
    imgCounter.textContent = (index + 1) + ' / ' + fotos.length; // actualiza "2 / 7"

    // Recorre todas las miniaturas y marca como .active solo la que corresponde
    document.querySelectorAll('#thumbsCol .thumb').forEach(t => {
      const idx = parseInt(t.dataset.index);
      t.classList.toggle('active', idx === index && idx < 3); // solo las visibles (no el +N)
    });

    mainImg.classList.remove('fade'); // quita fade → CSS vuelve a opacity: 1
  }, 200);
}


// Carga la primera foto y construye las miniaturas al abrir la página

mainImg.src            = fotos[0].src;           // muestra fotos[0] en la imagen grande
mainImg.alt            = fotos[0].label;
imgCounter.textContent = '1 / ' + fotos.length; // muestra "1 / 7"
buildThumbsCol();                                // construye las 3 miniaturas

// Al hacer clic en la foto grande, abre el modal en la foto actual
mainImgWrap.addEventListener('click', () => openModal(activeIndex));


// buildModalThumbs() Construye las 7 miniaturas dentro del modal (todas las fotos)

function buildModalThumbs() {
  modalThumbs.innerHTML = ''; // limpia antes de construir

  fotos.forEach((foto, i) => { // recorre las 7 fotos
    const div = document.createElement('div');
    div.className     = 'modal-thumb';
    div.dataset.index = i;

    const img = document.createElement('img');
    img.src = foto.src;
    img.alt = foto.label;
    div.appendChild(img);

    // Al hacer clic en una miniatura del modal, cambia la foto grande del modal
    div.addEventListener('click', () => setModalImage(i));
    modalThumbs.appendChild(div);
  });
}


// setModalImage(index) Cambia la foto grande dentro del modal

function setModalImage(index) {
  modalMainImg.classList.add('fade'); // inicia el fade

  setTimeout(() => {
    modalIndex                   = index;
    modalMainImg.src             = fotos[index].src;  // ← cambia la foto del modal
    modalMainImg.alt             = fotos[index].label;
    modalCounterText.textContent = (index + 1) + ' / ' + fotos.length; // actualiza "3 / 7"

    // Desactiva la flecha ← si estamos en la primera foto
    modalPrev.disabled = index === 0;
    // Desactiva la flecha → si estamos en la última foto
    modalNext.disabled = index === fotos.length - 1;

    // Marca como .active la miniatura correspondiente en el modal
    document.querySelectorAll('#modalThumbs .modal-thumb').forEach(t => {
      t.classList.toggle('active', parseInt(t.dataset.index) === index);
    });

    // Hace scroll automático para que la miniatura activa sea visible
    const active = document.querySelector('#modalThumbs .modal-thumb.active');
    if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

    modalMainImg.classList.remove('fade'); // termina el fade
  }, 180);
}


// openModal(startIndex) Abre el modal mostrando la foto del índice indicado

function openModal(startIndex = 0) {
  buildModalThumbs();                        // construye las 7 miniaturas
  setModalImage(startIndex);                 // muestra la foto correcta
  modalOverlay.classList.add('open');        // CSS lo hace visible (opacity: 1)
  document.body.style.overflow = 'hidden';  // evita que el fondo haga scroll
}


// closeModal() Cierra el modal y restaura el scroll

function closeModal() {
  modalOverlay.classList.remove('open'); // CSS lo oculta (opacity: 0)
  document.body.style.overflow = '';     // restaura el scroll normal
}


// EVENTOS DEL MODAL


// Flecha ← : va a la foto anterior
modalPrev.addEventListener('click', () => {
  if (modalIndex > 0) setModalImage(modalIndex - 1);
});

// Flecha → : va a la foto siguiente
modalNext.addEventListener('click', () => {
  if (modalIndex < fotos.length - 1) setModalImage(modalIndex + 1);
});

// Botón ✕ : cierra el modal
modalClose.addEventListener('click', closeModal);

// Clic en el fondo oscuro: cierra el modal
// e.target === modalOverlay verifica que el clic fue en el fondo, no en el contenido
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});


