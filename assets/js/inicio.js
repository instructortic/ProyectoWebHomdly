const inicio = document.querySelector('main');

inicio.innerHTML = `
  <article>

      <!-- PROPIEDADES DESTACADAS -->
      <section class="section container" id="propiedades">
        <h2 class="section-title">Propiedades Destacadas</h2>
        <div class="cards-grid" class="properties-grid">

          <div class="properties-grid" id="propertiesGrid">

          <!-- CARD 1 – Lote / Venta -->
          <div class="property-card" data-modalidad="compra" data-dep="Antioquia" data-mun="Medellín" data-barrio="El Poblado" data-tipo="Lote">
            <div class="card-image">
              <img src="assets/images/imgAnuncio/lote.jpg" alt="Lote">
              <span class="badge badge-venta">Venta</span>
              <button class="btn-favorite" aria-label="Favorito"><span class="material-symbols-rounded">favorite</span></button>
            </div>
            <div class="card-body">
              <div class="card-header-row">
                <h3 class="property-type">Lote</h3>
                <span class="property-code">cod:12345</span>
              </div>
              <p class="property-location"><span class="material-symbols-rounded">location_on</span>Sta Fe de Ant, La Membrillala</p>
              <div class="card-divider"></div>
              <div class="property-specs">
                <div class="spec-item"><span class="material-symbols-rounded">straighten</span><span>500 m²</span></div>
              </div>
              <p class="property-desc">Descubra la vida urbana en su maxima expresion con este espectacular lote a estrenar ubicado en Santa Fe ...</p>
            </div>
            <div class="card-footer">
              <span class="property-price">$ 15.000.000</span>
              <button class="btn-detail">Ver Detalle</button>
            </div>
          </div>

          <!-- CARD 2 – Casa / Alquiler -->
          <div class="property-card" data-modalidad="arriendo" data-dep="Antioquia" data-mun="Medellín" data-barrio="Laureles" data-tipo="Casa">
            <div class="card-image">
              <img src="assets/images/imgAnuncio/casa.jpg" alt="Casa">
              <span class="badge badge-alquiler">Alquiler</span>
              <button class="btn-favorite" aria-label="Favorito"><span class="material-symbols-rounded">favorite</span></button>
            </div>
            <div class="card-body">
              <div class="card-header-row">
                <h3 class="property-type">Casa</h3>
                <span class="property-code">cod:4789L</span>
              </div>
              <p class="property-location"><span class="material-symbols-rounded">location_on</span>Sta Fe de Ant, Santa Lucia</p>
              <div class="card-divider"></div>
              <div class="property-specs">
                <div class="spec-item"><span class="material-symbols-rounded">straighten</span><span>55 m²</span></div>
                <div class="spec-item"><span class="material-symbols-rounded">bed</span><span>3 hab</span></div>
                <div class="spec-item"><span class="material-symbols-rounded">shower</span><span>2 baños</span></div>
                <div class="spec-item"><span class="material-symbols-rounded">garage_home</span><span>Si</span></div>
              </div>
            </div>
            <div class="card-footer">
              <span class="property-price">$ 1.500.000</span>
              <button class="btn-detail">Ver Detalle</button>
            </div>
          </div>

          <!-- CARD 3 – Lote / Venta -->
          <div class="property-card" data-modalidad="compra" data-dep="Antioquia" data-mun="Envigado" data-barrio="El Poblado" data-tipo="Lote">
            <div class="card-image">
              <img src="assets/images/imgAnuncio/lote.jpg" alt="Lote">
              <span class="badge badge-venta">Venta</span>
              <button class="btn-favorite" aria-label="Favorito"><span class="material-symbols-rounded">favorite</span></button>
            </div>
            <div class="card-body">
              <div class="card-header-row">
                <h3 class="property-type">Lote</h3>
                <span class="property-code">cod:12345</span>
              </div>
              <p class="property-location"><span class="material-symbols-rounded">location_on</span>Sta Fe de Ant, La Membrillala</p>
              <div class="card-divider"></div>
              <div class="property-specs">
                <div class="spec-item"><span class="material-symbols-rounded">straighten</span><span>500 m²</span></div>
              </div>
              <p class="property-desc">Descubra la vida urbana en su maxima expresion con este espectacular lote a estrenar ubicado en Santa Fe ...</p>
            </div>
            <div class="card-footer">
              <span class="property-price">$ 100.000.000</span>
              <button class="btn-detail">Ver Detalle</button>
            </div>
          </div>

          <!-- CARD 4 – Apartamento / Alquiler -->
          <div class="property-card" data-modalidad="arriendo" data-dep="Cundinamarca" data-mun="Bogotá" data-barrio="Chapinero" data-tipo="Apartamento">
            <div class="card-image">
              <img src="assets/images/imgAnuncio/apartamento.jpg" alt="Apartamento">
              <span class="badge badge-alquiler">Alquiler</span>
              <button class="btn-favorite" aria-label="Favorito"><span class="material-symbols-rounded">favorite</span></button>
            </div>
            <div class="card-body">
              <div class="card-header-row">
                <h3 class="property-type">Apartamento</h3>
                <span class="property-code">cod:12345</span>
              </div>
              <p class="property-location"><span class="material-symbols-rounded">location_on</span>Sta Fe de Ant, Llano de Bolívar</p>
              <div class="card-divider"></div>
              <div class="property-specs">
                <div class="spec-item"><span class="material-symbols-rounded">straighten</span><span>210 m²</span></div>
                <div class="spec-item"><span class="material-symbols-rounded">bed</span><span>1 hab</span></div>
                <div class="spec-item"><span class="material-symbols-rounded">shower</span><span>2 baños</span></div>
                <div class="spec-item"><span class="material-symbols-rounded">garage_home</span><span>No</span></div>
              </div>
            </div>
            <div class="card-footer">
              <span class="property-price">$ 2.000.000</span>
              <button class="btn-detail">Ver Detalle</button>
            </div>
          </div>

       
        </div>

        </div>

        </section>
      <section class="stats-section">
    <h2 class="stats-title">Contador Estadística</h2>

    <div class="stats-grid">

      <!-- Tarjeta 1 -->
      <div class="stat-card">
        <span class="stat-number" data-target="50">0</span>
        <span class="stat-label">Propiedades publicadas</span>
      </div>

      <!-- Tarjeta 2 -->
      <div class="stat-card">
        <span class="stat-number" data-target="120">0</span>
        <span class="stat-label">Clientes satisfechos</span>
      </div>

      <!-- Tarjeta 3 -->
      <div class="stat-card">
        <span class="stat-number" data-target="184">0</span>
        <span class="stat-label">Vistas</span>
      </div>

      <!-- Tarjeta 4 -->
      <div class="stat-card">
        <span class="stat-number" data-target="28">0</span>
        <span class="stat-label">Propiedades cotizadas</span>
      </div>

    </div>
  </section>

    <!-- ══════════════════════════════
     NUESTROS SERVICIOS
      ══════════════════════════════ -->

      <section class="services-section">

      <h1 class="section-title">Nuestros Servicios</h1>

      <div class="title-divider">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      </div>

      <!-- Tarjetas principales -->
      <div class="main-cards">

        <!-- Vitrina publicitaria -->
        <div class="card card--slate">
          <div class="card__icon icon--navy">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <h2 class="card__title">Vitrina publicitaria</h2>
          <p class="card__desc">Nos encargamos de publicar tu inmueble.</p>
          <a href="#" class="btn btn--navy">Ver más &rarr;</a>
        </div>

        <!-- Arriendo -->
        <div class="card card--olive">
          <div class="card__icon icon--olive">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <path d="M8 11h6M11 8v6"/>
            </svg>
          </div>
          <h2 class="card__title">Arriendo</h2>
          <p class="card__desc">Acompañamiento completo en la búsqueda o publicación de tu propiedad.</p>
          <a href="#" class="btn btn--olive">Ver más &rarr;</a>
        </div>

        <!-- Venta -->
        <div class="card card--peach">
          <div class="card__icon icon--peach">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          <h2 class="card__title">Venta</h2>
          <p class="card__desc">Te ayudamos a vender tu lote o propiedad.</p>
          <a href="#" class="btn btn--peach">Ver más &rarr;</a>
        </div>

      </div>

      <!-- Título servicios complementarios -->
      <div class="sub-title-row">
        <h2>Servicios Complementarios</h2>
      </div>

      <!-- Tarjetas complementarias -->
      <div class="comp-cards">

        <!-- Avalúos & Inversión -->
        <div class="comp-card">
          <div class="comp-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/>
              <line x1="2" y1="20" x2="22" y2="20"/>
            </svg>
          </div>
          <div class="comp-card__body">
            <h3>Avalúos &amp; Inversión</h3>
            <p>Análisis de mercado y retorno de inversión.</p>
          </div>
        </div>

        <!-- Asesoría Jurídica -->
        <div class="comp-card">
          <div class="comp-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <line x1="10" y1="9" x2="8" y2="9"/>
            </svg>
          </div>
          <div class="comp-card__body">
            <h3>Asesoría Jurídica</h3>
            <p>Contratos, títulos y trámites notariales.</p>
          </div>
        </div>

        <!-- Asesoría Jurídica (balanza) -->
        <div class="comp-card">
          <div class="comp-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="3" x2="12" y2="21"/>
              <path d="M5 8l7-5 7 5"/>
              <path d="M3 17l4-9 4 9"/>
              <path d="M13 17l4-9 4 9"/>
              <line x1="1" y1="17" x2="9" y2="17"/>
              <line x1="15" y1="17" x2="23" y2="17"/>
            </svg>
          </div>
          <div class="comp-card__body">
            <h3>Asesoría Jurídica</h3>
            <p>Contratos, títulos y trámites notariales.</p>
          </div>
        </div>

      </div>

    </section>

    <!-- ══════════════════════════════
        BANNER INFERIOR
    ══════════════════════════════ -->
    <div class="banner">

      <div class="banner-item">
        <div class="banner-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <p>Tu tranquilidad es nuestra prioridad.</p>
      </div>

      <div class="banner-item">
        <div class="banner-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </div>
        <p>Cumplimos lo que prometemos</p>
      </div>

      <div class="banner-item">
        <div class="banner-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            <line x1="9" y1="10" x2="15" y2="10"/>
          </svg>
        </div>
        <p>Hablamos claro, sin letras pequeñas</p>
      </div>

    </div>

      <!-- AGENTES -->
      <section class="agentes-section" id="agentes">
        <h2 class="agentes-titulo">Agentes</h2>
        <div class="agentes-grid">

          <div class="agente-card">
            <div class="agente-img-wrapper">
              <img src="./assets/images/imgInicio/Merardo.png" alt="Agente 1" class="agente-img">
              <div class="agente-overlay">
                <span class="agente-badge">Disponible</span>
              </div>
            </div>
            <div class="agente-info">
              <p class="agente-nombre">Julian Uribe</p>
              <p class="agente-rol">Agente</p>
            </div>
          </div>

          <div class="agente-card">
            <div class="agente-img-wrapper">
              <img src="./assets/images/imgInicio/Tatiana.png" alt="Agente 1" class="agente-img">
              <div class="agente-overlay">
                <span class="agente-badge">Disponible</span>
              </div>
            </div>
            <div class="agente-info">
              <p class="agente-nombre">Tatiana Mesa</p>
              <p class="agente-rol">Agente</p>
            </div>
          </div>

          <div class="agente-card">
            <div class="agente-img-wrapper">
              <img src="./assets/images/imgInicio/_Yeiner.png" alt="Agente 3" class="agente-img">
              <div class="agente-overlay">
                <span class="agente-badge">Disponible</span>
              </div>
            </div>
            <div class="agente-info">
              <p class="agente-nombre">Yeiner Castillo</p>
              <p class="agente-rol">Agente</p>
            </div>
          </div>


          <div class="agente-card">
            <div class="agente-img-wrapper">
              <img src="./assets/images/imgInicio/juliana1.jpg" alt="Agente 3" class="agente-img">
              <div class="agente-overlay">
                <span class="agente-badge">Disponible</span>
              </div>
            </div>
            <div class="agente-info">
              <p class="agente-nombre">Juliana Villa</p>
              <p class="agente-rol">Agente</p>
            </div>
          </div>


          <div class="agente-card">
            <div class="agente-img-wrapper">
              <img src="./assets/images/imgInicio/Santiago.png" alt="Agente 3" class="agente-img">
              <div class="agente-overlay">
                <span class="agente-badge">Disponible</span>
              </div>
            </div>
            <div class="agente-info">
              <p class="agente-nombre">Santiago Gomez</p>
              <p class="agente-rol">Agente</p>
            </div>
          </div>

          <div class="agente-card">
            <div class="agente-img-wrapper">
              <img src="./assets/images/imgInicio/FotoAgenteAida.png" alt="Agente 3" class="agente-img">
              <div class="agente-overlay">
                <span class="agente-badge">Disponible</span>
              </div>
            </div>
            <div class="agente-info">
              <p class="agente-nombre">Aida Arredondo</p>
              <p class="agente-rol">Agente</p>
            </div>
          </div>

          <div class="agente-card">
            <div class="agente-img-wrapper">
              <img src="./assets/images/imgInicio/alexis.jpeg" alt="Agente 3" class="agente-img">
              <div class="agente-overlay">
                <span class="agente-badge">Disponible</span>
              </div>
            </div>
            <div class="agente-info">
              <p class="agente-nombre">Alexis Alvarez</p>
              <p class="agente-rol">Agente</p>
            </div>
          </div>


          <div class="agente-card">
            <div class="agente-img-wrapper">
              <img src="./assets/images/imgInicio/FotoTrajeVictorBorja.png" alt="Agente 3" class="agente-img">
              <div class="agente-overlay">
                <span class="agente-badge">Disponible</span>
              </div>
            </div>
            <div class="agente-info">
              <p class="agente-nombre">Victor Borja</p>
              <p class="agente-rol">Agente</p>
            </div>
          </div>


          <div class="agente-card">
            <div class="agente-img-wrapper">
              <img src="./assets/images/imgInicio/Alejandro Cano.png" alt="Agente 3" class="agente-img">
              <div class="agente-overlay">
                <span class="agente-badge">Disponible</span>
              </div>
            </div>
            <div class="agente-info">
              <p class="agente-nombre">Alejandro Cano</p>
              <p class="agente-rol">Agente</p>
            </div>
          </div>


          <div class="agente-card">
            <div class="agente-img-wrapper">
              <img src="./assets/images/imgInicio/Foto_perfil_Jhonatan.png" alt="Agente 3" class="agente-img">
              <div class="agente-overlay">
                <span class="agente-badge">Disponible</span>
              </div>
            </div>
            <div class="agente-info">
              <p class="agente-nombre">Jhonatan Lemus</p>
              <p class="agente-rol">Agente</p>
            </div>
          </div>


          <div class="agente-card">
            <div class="agente-img-wrapper">
              <img src="./assets/images/imgInicio/JoseMadrid.png" alt="Agente 3" class="agente-img">
              <div class="agente-overlay">
                <span class="agente-badge">Disponible</span>
              </div>
            </div>
            <div class="agente-info">
              <p class="agente-nombre">Jose Madrid</p>
              <p class="agente-rol">Agente</p>
            </div>
          </div>


          <div class="agente-card">
            <div class="agente-img-wrapper">
              <img src="./assets/images/imgInicio/Sebastian Higuita A..png" alt="Agente 3" class="agente-img">
              <div class="agente-overlay">
                <span class="agente-badge">Disponible</span>
              </div>
            </div>
            <div class="agente-info">
              <p class="agente-nombre">Sebastian Higuita</p>
              <p class="agente-rol">Agente</p>
            </div>
          </div>

          <div class="agente-card">
            <div class="agente-img-wrapper">
              <img src="./assets/images/imgInicio/MariaJose.jpeg" alt="Agente 3" class="agente-img">
              <div class="agente-overlay">
                <span class="agente-badge">Disponible</span>
              </div>
            </div>
            <div class="agente-info">
              <p class="agente-nombre">Maria Jose Macias</p>
              <p class="agente-rol">Agente</p>
            </div>
          </div>

          <div class="agente-card">
            <div class="agente-img-wrapper">
              <img src="./assets/images/imgInicio/Varela Sebastian.png" alt="Agente 3" class="agente-img">
              <div class="agente-overlay">
                <span class="agente-badge">Disponible</span>
              </div>
            </div>
            <div class="agente-info">
              <p class="agente-nombre">Sebastian Varela</p>
              <p class="agente-rol">Agente</p>
            </div>
          </div>

          <div class="agente-card">
                    <div class="agente-img-wrapper">
                      <img src="./assets/images/imgInicio/Zuleidys.jpeg" alt="Agente 3" class="agente-img">
                      <div class="agente-overlay">
                        <span class="agente-badge">Disponible</span>
                      </div>
                    </div>
                    <div class="agente-info">
                      <p class="agente-nombre">Zuleidys Rodriguez</p>
                      <p class="agente-rol">Agente</p>
                    </div>
          </div>	


          <div class="agente-card">
                    <div class="agente-img-wrapper">
                      <img src="./assets/images/imgInicio/Cristian.jpeg" alt="Agente 3" class="agente-img">
                      <div class="agente-overlay">
                        <span class="agente-badge">Disponible</span>
                      </div>
                    </div>
                    <div class="agente-info">
                      <p class="agente-nombre">Cristian Restrepo</p>
                      <p class="agente-rol">Agente</p>
                    </div>
          </div>



          <div class="agente-card">
                    <div class="agente-img-wrapper">
                      <img src="./assets/images/imgInicio/AnaCarolina.jpeg" alt="Agente 3" class="agente-img">
                      <div class="agente-overlay">
                        <span class="agente-badge">Disponible</span>
                      </div>
                    </div>
                    <div class="agente-info">
                      <p class="agente-nombre">Carolina Alvarez</p>
                      <p class="agente-rol">Agente</p>
                    </div>
          </div>




          <div class="agente-card">
                    <div class="agente-img-wrapper">
                      <img src="./assets/images/imgInicio/SebastianQ.jpeg" alt="Agente 3" class="agente-img">
                      <div class="agente-overlay">
                        <span class="agente-badge">Disponible</span>
                      </div>
                    </div>
                    <div class="agente-info">
                      <p class="agente-nombre">Sebastián Quintero</p>
                      <p class="agente-rol">Agente</p>
                    </div>
                  </div>


          <div class="agente-card">
                    <div class="agente-img-wrapper">
                      <img src="./assets/images/imgInicio/CarolinaW.jpeg" alt="Agente 3" class="agente-img">
                      <div class="agente-overlay">
                        <span class="agente-badge">Disponible</span>
                      </div>
                    </div>
                    <div class="agente-info">
                      <p class="agente-nombre">Wilessie Torres</p>
                      <p class="agente-rol">Agente</p>
                    </div>
          </div>


          <div class="agente-card">
                    <div class="agente-img-wrapper">
                      <img src="./assets/images/imgInicio/JoseLuis.jpeg" alt="Agente 3" class="agente-img">
                      <div class="agente-overlay">
                        <span class="agente-badge">Disponible</span>
                      </div>
                    </div>
                    <div class="agente-info">
                      <p class="agente-nombre">Jose Gonzalez </p>
                      <p class="agente-rol">Agente</p>
                    </div>
          </div>

        </div>
      </section>

    </article>
  `;