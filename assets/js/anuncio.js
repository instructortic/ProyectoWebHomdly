/* =====================================================
   anuncio.js  –  Filtros + Favoritos + Selección card
   ===================================================== */

// ── Datos de municipios por departamento ──────────────
const municipiosData = {
  "Antioquia":    ["Medellín", "Envigado", "Bello", "Itagüí", "Santa Fe de Antioquia"],
  "Cundinamarca": ["Bogotá", "Chía", "Zipaquirá", "Facatativá"]
};

// ── Estado del tab activo (arriendo | compra) ─────────
let tabActual = "arriendo";


// ── setTab: cambia el tab activo y filtra ─────────────
function setTab(el) {
  tabActual = el.dataset.tab;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  buscar();
}


// ── actualizarMunicipios: rellena el select de municipio ──
function actualizarMunicipios() {
  const dep = document.getElementById('dep').value;
  const mun = document.getElementById('mun');
  mun.innerHTML = '<option value="">Municipio</option>';

  if (municipiosData[dep]) {
    municipiosData[dep].forEach(m => {
      const opt = document.createElement('option');
      opt.textContent = m;
      mun.appendChild(opt);
    });
  }
  buscar(); // re-filtra al cambiar departamento
}


// ── buscar: filtra las cards según los selects + tab ──
function buscar() {
  const dep    = document.getElementById('dep').value;
  const mun    = document.getElementById('mun').value;
  const barrio = document.getElementById('barrio').value;
  const tipo   = document.getElementById('tipo').value;
  const codigo = document.getElementById('codigo').value.toLowerCase().trim();

  const cards     = document.querySelectorAll('.property-card');
  let visibles    = 0;

  cards.forEach(card => {
    const cMod    = card.dataset.modalidad || '';
    const cDep    = card.dataset.dep       || '';
    const cMun    = card.dataset.mun       || '';
    const cBarrio = card.dataset.barrio    || '';
    const cTipo   = card.dataset.tipo      || '';
    // el código lo sacamos del texto del .property-code dentro de la card
    const cCodigo = (card.querySelector('.property-code')?.textContent || '').toLowerCase();

    const ok =
      (cMod === tabActual) &&
      (!dep    || cDep    === dep)    &&
      (!mun    || cMun    === mun)    &&
      (!barrio || cBarrio === barrio) &&
      (!tipo   || cTipo   === tipo)   &&
      (!codigo || cCodigo.includes(codigo));

    card.style.display = ok ? '' : 'none';
    if (ok) visibles++;
  });

  // Mensaje "sin resultados"
  const noResults = document.getElementById('noResults');
  if (noResults) noResults.style.display = visibles === 0 ? 'block' : 'none';
}


// ── DOMContentLoaded: favoritos + selección de card ──
document.addEventListener('DOMContentLoaded', () => {

  // Corazón / favorito en cada card
  document.querySelectorAll('.btn-favorite').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      btn.classList.toggle('active');
    });
  });

  // Resaltar card al hacer clic (no en botones internos)
  document.querySelectorAll('.property-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.btn-favorite') || e.target.closest('.btn-detail')) return;
      document.querySelectorAll('.property-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });

/*   // ── Botón "Ver Detalle": abre modal de registro ──
  document.querySelectorAll('.btn-detail').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();      // evita que el <a> navegue
      e.stopPropagation();     // evita que seleccione la card
      abrirModal();
    });
  });
 */
  // Carga inicial: mostrar solo arriendos
  buscar();
});

/* // agregar función para el mensaje de "registro requerido" Carolina
// ── Funciones del modal ───────────────────────────────
function abrirModal() {
  document.getElementById('overlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  document.getElementById('overlay').classList.remove('show');
  document.body.style.overflow = '';
}

function cerrarModalFuera(event) {
  if (event.target === document.getElementById('overlay')) cerrarModal();
}

// Cerrar con tecla Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') cerrarModal();
});

// Redirecciones
function irARegistro() { window.location.href = 'index.html?login=1&panel=registro'; }
function irALogin()     { window.location.href = 'index.html?login=1&panel=login'; }

 */