/* ============================================================
   scriptSimulacion.js  —  SIMULACIÓN DE AUTH (BORRADOR)
   ============================================================
   ¿Qué hace este archivo?
   - Intercepta los nav-btn protegidos y abre el modal si no hay sesión
   - Al dar clic en "Iniciar Sesión" (sin validar campos) marca sesión activa
   - Cambia el ícono de usuario según el estado
   - Desde otras páginas, el ícono hace logout y vuelve a index.html

   ✅ PARA BORRAR LA SIMULACIÓN: elimina este archivo y su <script> tag en el HTML
   ✅ No modifica scriptLogin.js ni navegacion.js ni ningún archivo existente
   ============================================================ */


/* ── 1. PÁGINAS QUE NO NECESITAN LOGIN ──────────────────────
   Inicio siempre es libre. Agrega o quita hrefs aquí según convenga.
   ---------------------------------------------------------- */
const PAGINAS_LIBRES = ["index.html", "./index.html", "/", ""];


/* ── 2. DETECTAR SI YA HAY SESIÓN SIMULADA ──────────────────
   Se guarda en sessionStorage para que dure mientras el navegador esté abierto.
   Al cerrar la pestaña se borra automáticamente.
   ---------------------------------------------------------- */
function estaLogueado() {
    return sessionStorage.getItem("sim_logueado") === "true";
}

function iniciarSesionFalsa() {
    sessionStorage.setItem("sim_logueado", "true");
}

function cerrarSesionFalsa() {
    sessionStorage.removeItem("sim_logueado");
}


/* ── 3. DETECTAR EN QUÉ PÁGINA ESTAMOS ──────────────────────*/
function esIndex() {
    const path = window.location.pathname;
    const archivo = path.substring(path.lastIndexOf("/") + 1);
    return archivo === "index.html" || archivo === "" || archivo === "/";
}


/* ── 4. ACTUALIZAR ÍCONO DE USUARIO ─────────────────────────
   - Sin sesión:  ícono gris normal  (fa-user-circle)
   - Con sesión:  ícono azul + texto "Mi cuenta"
   ---------------------------------------------------------- */
function actualizarIconoUsuario() {
    const btn = document.getElementById("btn-open-modal");
    if (!btn) return;

    if (estaLogueado()) {
        btn.innerHTML = `
            <a href="#" class="icono-usuario" ">
            <i class="fas fa-sign-out-alt"></i>
            </a>
        `;
        btn.title = "Cerrar sesión";

        /* En páginas distintas a index: clic = logout + volver a inicio */
        if (!esIndex()) {
            btn.onclick = function (e) {
                e.preventDefault();
                cerrarSesionFalsa();
                window.location.href = "index.html";
            };
        } else {
            /* En index logueado: clic = logout en sitio */
            btn.onclick = function (e) {
                e.preventDefault();
                cerrarSesionFalsa();
                actualizarIconoUsuario();
                mostrarMensaje("Sesión cerrada.");
            };
        }

    } else {
        btn.innerHTML = `<i class="fas fa-user-circle"></i>`;
        btn.title = "Iniciar sesión";
        btn.onclick = null; /* deja que scriptLogin.js maneje el modal */
    }
}


/* ── 5. MENSAJE FLOTANTE SIMPLE (sin tocar el toast del login) */
function mostrarMensaje(texto) {
    const msg = document.createElement("div");
    msg.textContent = texto;
    Object.assign(msg.style, {
        position: "fixed", bottom: "24px", left: "50%",
        transform: "translateX(-50%)",
        background: "#2c4a7c", color: "#fff",
        padding: "12px 24px", borderRadius: "8px",
        fontSize: "14px", fontWeight: "600",
        zIndex: "99999", boxShadow: "0 4px 16px rgba(0,0,0,.25)",
        transition: "opacity .4s"
    });
    document.body.appendChild(msg);
    setTimeout(() => { msg.style.opacity = "0"; }, 2500);
    setTimeout(() => msg.remove(), 3000);
}


/* ── 6. PROTEGER LOS NAV-BTN EN INDEX ───────────────────────
   Solo aplica en index.html porque en las demás páginas
   la navegación ya está disponible al haber pasado por el login.

   Botones protegidos: todo excepto "Inicio"
   ---------------------------------------------------------- */
function protegerNavegacion() {
    if (!esIndex()) return; /* en otras páginas no interceptamos */

    const overlay = document.getElementById("modal-overlay");
    if (!overlay) return;

    /* Espera a que navegacion.js haya inyectado el nav (si aplica) */
    setTimeout(() => {
        const navBtns = document.querySelectorAll(".nav-btn");

        navBtns.forEach(btn => {
            const href = btn.getAttribute("href") || "";
            const esLibre = PAGINAS_LIBRES.some(p => href === p) || href === "index.html";

            if (!esLibre) {
                /* Añadir etiqueta visual de "requiere login" */
                const badge = document.createElement("span");
                badge.textContent = "";
                badge.title = "Requiere iniciar sesión";
                Object.assign(badge.style, {
                    fontSize: "10px", marginLeft: "4px",
                    verticalAlign: "middle", opacity: "0.7"
                });
                btn.appendChild(badge);

                /* Interceptar clic */
                btn.addEventListener("click", function (e) {
                    if (!estaLogueado()) {
                        e.preventDefault();
                        overlay.classList.add("active");
                        document.body.style.overflow = "hidden";
                        mostrarMensaje("Inicia sesión para acceder");
                    }
                    /* Si está logueado: navega normal, no bloqueamos */
                });
            }
        });
    }, 100);
}


/* ── 7. INTERCEPTAR EL BOTÓN "INICIAR SESIÓN" DEL MODAL ─────
   Cuando el usuario da clic en el botón del formulario,
   sin importar si los campos están llenos o no,
   simulamos login y cerramos el modal.

   scriptLogin.js sigue funcionando igual (valida campos, muestra errores).
   Nosotros solo enganchamos DESPUÉS del clic, con un pequeño delay,
   para que si scriptLogin.js rechaza el envío (campos vacíos) nosotros
   también esperemos — o puedes cambiar BYPASS_VALIDACION a true
   para ignorar todo y loguear siempre.
   ---------------------------------------------------------- */
const BYPASS_VALIDACION = true;
/*
   true  → cualquier clic en "Iniciar Sesión" = login inmediato (modo demo puro)
   false → solo loguea si scriptLogin.js no encontró errores (respeta validaciones)
*/

function interceptarBotonLogin() {
    const btnLogin = document.getElementById("btn-login");
    const overlay  = document.getElementById("modal-overlay");
    if (!btnLogin || !overlay) return;

    btnLogin.addEventListener("click", function () {
        if (BYPASS_VALIDACION) {
            /* Demo puro: loguear sin importar campos */
            setTimeout(() => {
                iniciarSesionFalsa();
                overlay.classList.remove("active");
                document.body.style.overflow = "";
                actualizarIconoUsuario();
                desbloquearNavBtns();
                mostrarMensaje("Sesión simulada activa");
            }, 400); /* pequeño delay para que se vea el clic */
        } else {
            /* Respetar validaciones: solo loguear si no hay errores visibles */
            setTimeout(() => {
                const hayErrores = document.querySelectorAll(".input-group-custom.invalid").length > 0;
                if (!hayErrores) {
                    iniciarSesionFalsa();
                    actualizarIconoUsuario();
                    desbloquearNavBtns();
                    mostrarMensaje("Sesión simulada activa");
                }
            }, 1600); /* después del spinner de scriptLogin.js */
        }
    });
}


/* ── 8. QUITAR CANDADOS CUANDO YA ESTÁ LOGUEADO ─────────────*/
function desbloquearNavBtns() {
    document.querySelectorAll(".nav-btn span").forEach(badge => badge.remove());
}


/* ── 9. INICIALIZAR TODO ────────────────────────────────────
   Espera a que el DOM (y la inyección del header) esté listo.
   ---------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {

    /* Si la sesión ya estaba activa (venía de otra página) */
    if (estaLogueado()) {
        actualizarIconoUsuario();
        /* En páginas distintas a index no hay nada que proteger */
    }

    /* Solo en index: proteger nav y escuchar botón de login */
    if (esIndex()) {
        protegerNavegacion();
        interceptarBotonLogin();

        /* Si ya estaba logueado al llegar al index: desbloquear */
        if (estaLogueado()) desbloquearNavBtns();
    }
});
