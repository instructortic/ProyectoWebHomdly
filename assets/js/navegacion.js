const header = document.querySelector('header');
const footer = document.querySelector('footer');




header.innerHTML = `
<div class="topbar">
    <span class="topbar-frase">"Conectamos destinos, creamos hogares"</span>
    <div class="topbar-contacto">
      <span class="topbar-email">contacto.homdly@gmail.com</span>
      
      <!-- <span class="topbar-tel">+57 300 000 0000</span> -->
      <a href="https://www.tiktok.com/@inmobiliariahomdly?is_from_webapp=1&sender_device=pc" class="topbar-icono"><i class="fab fa-facebook-f"></i></a>
      <a href="https://www.instagram.com/accounts/login/" class="topbar-icono"><i class="fab fa-instagram"></i></a>
      <a href="https://www.youtube.com/@homdly" class="topbar-icono"><i class="fab fa-youtube"></i></a>
      <a href="https://www.instagram.com/accounts/login/" class="topbar-icono"><i class="fab fa-whatsapp"></i></a>
      <a href="https://workspace.google.com/intl/es-419/gmail/" class="topbar-icono"><i class="bi bi-envelope-at"></i></a>
      
    </div>
  </div>

  <!-- ===============================
       NAVBAR BLANCO
  ================================ -->
  <header class="header">
    <div class="header-inner">

      <!-- Logo -->
      <a href="index.html" class="logo" >
        <img src="../assets/images/logo.png" alt="Homdly" height="45">
      </a>

      <!-- Botón hamburguesa — solo aparece en móvil -->
      


      <button class="hamburguesa" id="btnHamburguesa">
        <span></span>
        <span></span>
        <span></span>
      </button> 

      <!-- Menú de navegación -->
      <nav class="nav-menu" id="navMenu">
        <a href="../index.html" class="nav-btn">Inicio</a>
        <a href="../quienesSomos.html" class="nav-btn">¿Quiénes Somos?</a>
        <a href="../anuncio.html" class="nav-btn">Propiedades</a>
        <a href="../soporte.html" class="nav-btn">Soporte</a>
        <a href="../contacto.html" class="nav-btn">Contacto</a>
   
        
      
      </nav>

      <!-- Ícono usuario -->
     <a href="#" class="icono-usuario" id="btn-open-modal">
      <i class="fas fa-user-circle"></i>
    </a>

    </div>
  </header>
  
   
  
  
  `;


  footer.innerHTML = `
  <div class="footer-top">
  
      <!-- Logo -->
      <div class="logo-Footer">
        <img src="../assets/images/logo 50.png" alt="">
        <div class="logo-text">
          <h1>HOMDLY</h1>
        </div>
      </div>
   
      <!-- Columna 1 -->
      <div class="col">
        <h4>Sobre Homdly</h4>
        <a href="#">Destaca tu Publicación</a>  
        <a href="../soporte.html">Preguntas Frecuentes</a>
        <a href="../Politica privacidad.html">Política de Privacidad</a>
        <a href="../Politica seguridad cookies.html">Política de Seguridad Cookies</a>
      </div>
  
      <!-- Columna 2 -->
      <div class="col">
        <h4>Mapa del Sitio</h4>
        <a href="../index.html">Inicio</a>
        <a href="../quienesSomos.html">¿Quiénes somos?</a>
        <a href="../anuncio.html">Propiedades</a>
        <a href="../soporte.html">Soporte</a>
        <a href="../contacto.html">Contacto</a>

      <a href="#" onclick="document.getElementById('modal-overlay').classList.add('active'); return false;">Inicio de sesión</a>
      <a href="#" onclick="document.getElementById('modal-overlay').classList.add('active'); document.getElementById('btn-sign-up').click(); return false;">Registro</a>
      </div>
  
      <!-- Columna 3 -->
      <div class="col">
        <h4>Encuentra en Homdly</h4>
        <a href="#">Propiedades Usadas</a>
        <a href="#">Propiedades Nuevas</a>
        <a href="#">Alquiler de propiedades</a>
        <!-- <a href="#">Georreferenciación</a> -->
      </div>
  
      <!-- Columna 4 Contacto -->
      <div class="col">
        <h4>Contacto</h4>
        <p>
          Dirección: Santa Fe de Antioquia<br>
          Celular: +57 300 000 0000<br>
          Email: contacto.homdly@gmail.com<br>
          homdly.inmobiliaria@hotmail.com<br>
          homdly.inmobiliaria@outlook.com<br>
          Redes Sociales:
        </p>
        <div class="socials">
          <a href="https://wa.me/message/GFB74UEFG2IVC1"><i class="bi bi-whatsapp"></i></a>
          <a href="https://www.facebook.com/profile.php?id=61588801114017"><i class="bi bi-facebook"></i></a>
          <a href=" https://mail.google.com"><i class="bi bi-envelope-fill"></i></a>
          <a href="https://www.youtube.com/@HOMDLY"><i class="bi bi-youtube"></i></a>
          <a href="https://www.instagram.com/homdly_inmobiliaria/"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
  
    </div>
    
  <div class="icons" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">
    <i class="bi bi-arrow-up-circle"></i>
  </div>
  
    <!-- Bottom bar -->
    <div class="footer-bottom">
      <span>2026 ADSOSENA | todos los derechos reservados</span>
      <span>"Conectamos destinos, Creamos hogares"</span>
    </div>
  `;

  

 