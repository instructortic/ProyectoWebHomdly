/// JS FILTRO CAROLINA W

// ── CLEAR FILTERS ──
function clearFilters() {
  // Resetear radios a su primer valor
  document.querySelector('#op-arriendo').checked = true;
  document.querySelector('#h-1').checked = true;
  document.querySelector('#b-1').checked = true;
  document.querySelector('#e-1').checked = true;
  document.querySelector('#a-any').checked = true;

  // Desmarcar todos los checkboxes
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.checked = false;
  });

  // Resetear sliders de precio
  document.getElementById('rangeMin').value = 500000;
  document.getElementById('rangeMax').value = 5000000;
  updateRange();

  // Limpiar inputs de área
  document.querySelectorAll('.area-inputs input').forEach(input => {
    input.value = '';
  });
}


// ── SIDEBAR TOGGLE ──
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const btn = document.getElementById('toggleSidebar');
  sidebar.classList.toggle('collapsed');
  btn.classList.toggle('open');
}

// ── COLLAPSIBLE SECTIONS ──
function toggleSection(labelEl) {
  labelEl.classList.toggle('collapsed');
  const content = labelEl.nextElementSibling;
  content.classList.toggle('hidden');
}


// ── RANGE SLIDER ──
function updateRange() {
  const min = parseInt(document.getElementById('rangeMin').value);
  const max = parseInt(document.getElementById('rangeMax').value);
  const total = 20000;
  const fill = document.getElementById('rangeFill');
  fill.style.left = (min/total*100) + '%';
  fill.style.width = ((max-min)/total*100) + '%';
  document.getElementById('minPrice').value = min.toLocaleString('es-CO');
  document.getElementById('maxPrice').value = max.toLocaleString('es-CO');
}

document.getElementById('rangeMin').addEventListener('input', function() {
  if(parseInt(this.value) > parseInt(document.getElementById('rangeMax').value))
    this.value = document.getElementById('rangeMax').value;
  updateRange();
});
document.getElementById('rangeMax').addEventListener('input', function() {
  if(parseInt(this.value) < parseInt(document.getElementById('rangeMin').value))
    this.value = document.getElementById('rangeMin').value;
  updateRange();
});



// View toggle
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

// Pagination
document.querySelectorAll('.page-btn:not(.arrow)').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.page-btn:not(.arrow)').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

updateRange();



    /* ── DRAWER MÓVIL ── */
    function openDrawer() {
      document.getElementById('mobileDrawer').classList.add('open');
      document.getElementById('drawerOverlay').classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeDrawer() {
      document.getElementById('mobileDrawer').classList.remove('open');
      document.getElementById('drawerOverlay').classList.remove('open');
      document.body.style.overflow = '';
    }

    function updateBadge() {
      const checked = document.querySelectorAll('#mobileDrawer input[type="checkbox"]:checked').length;
      const badge = document.getElementById('fabBadge');
      if (checked > 0) { badge.style.display = 'flex'; badge.textContent = checked; }
      else { badge.style.display = 'none'; }
    }

    function updateDrRange() {
      const min = parseInt(document.getElementById('drMin').value);
      const max = parseInt(document.getElementById('drMax').value);
      const lo = Math.min(min, max), hi = Math.max(min, max);
      const total = 10000000;
      document.getElementById('drRangeFill').style.left  = (lo / total * 100) + '%';
      document.getElementById('drRangeFill').style.right = (100 - hi / total * 100) + '%';
      document.getElementById('drPriceMin').value = lo.toLocaleString('es-CO');
      document.getElementById('drPriceMax').value = hi.toLocaleString('es-CO');
    }
    updateDrRange();

    /* Swipe para cerrar */
    let startY = 0;
    const drawer = document.getElementById('mobileDrawer');
    drawer.addEventListener('touchstart', e => { startY = e.touches[0].clientY; }, { passive: true });
    drawer.addEventListener('touchend', e => {
      if (e.changedTouches[0].clientY - startY > 80) closeDrawer();
    }, { passive: true });
