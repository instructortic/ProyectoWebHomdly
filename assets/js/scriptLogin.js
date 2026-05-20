/* LOGIN / REGISTRO — script.js (Bootstrap Icons) */

/* ── Modal ─────────────────────────────────────── */
const overlay       = document.getElementById("modal-overlay");
const iconoUsuario  = document.getElementById("btn-open-modal");
const btnModalClose = document.getElementById("modal-close");

function openModal()  { overlay.classList.add("active");    document.body.style.overflow = "hidden"; }
function closeModal() { overlay.classList.remove("active"); document.body.style.overflow = ""; }

iconoUsuario.addEventListener("click", openModal);
btnModalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });


/* ── Panel toggle (desktop) ─────────────────────── */
const container = document.getElementById("main-container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

function goToSignIn() { container.classList.remove("toggle"); setMobileTabs(false); }
function goToSignUp() { container.classList.add("toggle");    setMobileTabs(true);  }

btnSignIn.addEventListener("click", goToSignIn);
btnSignUp.addEventListener("click", goToSignUp);


/* ── Mobile tabs ────────────────────────────────── */
const tabSignIn = document.getElementById("tab-signin");
const tabSignUp = document.getElementById("tab-signup");

function setMobileTabs(isRegister) {
    tabSignIn.classList.toggle("active", !isRegister);
    tabSignUp.classList.toggle("active",  isRegister);
}

tabSignIn.addEventListener("click", goToSignIn);
tabSignUp.addEventListener("click", goToSignUp);


/* 1. FOCUS EN INPUTS */
document.querySelectorAll(".input-group-custom input").forEach(input => {
    const wrap = input.closest(".input-group-custom");
    input.addEventListener("focus", () => wrap.classList.add("focused"));
    input.addEventListener("blur",  () => wrap.classList.remove("focused"));
});


/* 2. MOSTRAR / OCULTAR CONTRASEÑA — Bootstrap Icons */
document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.addEventListener("click", () => {
        const input  = document.getElementById(icon.dataset.target);
        const hidden = input.type === "password";
        input.type   = hidden ? "text" : "password";
        // Cambiar clase del ícono bi
        icon.className = hidden
            ? "bi bi-eye-slash toggle-password"
            : "bi bi-eye toggle-password";
    });
});


/* 3. HELPERS DE VALIDACIÓN */
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
const isValidName  = name  => name.trim().length >= 2;
const isValidPass  = pass  => pass.length >= 8;

function setFieldState(wrapId, errorId, valid, message = "") {
    const wrap  = document.getElementById(wrapId);
    const error = document.getElementById(errorId);
    wrap.classList.remove("valid", "invalid");
    if (message === "" && !valid) return;
    wrap.classList.add(valid ? "valid" : "invalid");
    error.textContent = valid ? "" : message;
}

function clearFieldState(wrapId, errorId) {
    document.getElementById(wrapId).classList.remove("valid", "invalid");
    document.getElementById(errorId).textContent = "";
}


/* 4. VALIDACIÓN SIGN IN */
const siEmail = document.getElementById("si-email");
const siPass  = document.getElementById("si-password");

siEmail.addEventListener("input", () => {
    const v = siEmail.value;
    if (!v) { clearFieldState("si-email-wrap","si-email-error"); return; }
    setFieldState("si-email-wrap","si-email-error", isValidEmail(v), "El email no es válido");
});

siPass.addEventListener("input", () => {
    const v = siPass.value;
    if (!v) { clearFieldState("si-pass-wrap","si-pass-error"); return; }
    setFieldState("si-pass-wrap","si-pass-error", isValidPass(v), "La contraseña debe tener mínimo 8 caracteres");
});


/* 5. VALIDACIÓN SIGN UP */
const suName  = document.getElementById("su-name");
const suEmail = document.getElementById("su-email");
const suPass  = document.getElementById("su-password");

suName.addEventListener("input", () => {
    const v = suName.value;
    if (!v) { clearFieldState("su-name-wrap","su-name-error"); return; }
    setFieldState("su-name-wrap","su-name-error", isValidName(v), "El nombre debe tener al menos 2 caracteres");
});

suEmail.addEventListener("input", () => {
    const v = suEmail.value;
    if (!v) { clearFieldState("su-email-wrap","su-email-error"); return; }
    setFieldState("su-email-wrap","su-email-error", isValidEmail(v), "El email no es válido");
});

suPass.addEventListener("input", () => {
    const v = suPass.value;
    if (!v) { clearFieldState("su-pass-wrap","su-pass-error"); setStrength(null); return; }
    setFieldState("su-pass-wrap","su-pass-error", isValidPass(v), "La contraseña debe tener mínimo 8 caracteres");
    setStrength(v);
});


/* 6. FORTALEZA DE CONTRASEÑA */
function getStrengthLevel(pass) {
    let score = 0;
    if (pass.length >= 8)  score++;
    if (pass.length >= 12) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    return score <= 2 ? "weak" : score <= 4 ? "medium" : "strong";
}

const strengthWrapper = document.getElementById("strength-wrapper");
const strengthFill    = document.getElementById("strength-fill");
const strengthLabel   = document.getElementById("strength-label");
const strengthText    = { weak:"Débil", medium:"Media", strong:"Fuerte" };

function setStrength(pass) {
    if (!pass) {
        strengthWrapper.classList.remove("visible");
        strengthFill.className    = "strength-fill";
        strengthLabel.className   = "strength-label";
        strengthLabel.textContent = "Fortaleza";
        return;
    }
    const level = getStrengthLevel(pass);
    strengthWrapper.classList.add("visible");
    strengthFill.className    = `strength-fill ${level}`;
    strengthLabel.className   = `strength-label ${level}`;
    strengthLabel.textContent = `Fortaleza: ${strengthText[level]}`;
}


/* 7. TOAST NOTIFICATIONS — Bootstrap Icons */
const toastContainer = document.getElementById("toast-container");
const toastIcons = {
    success: "bi bi-check-circle",
    error:   "bi bi-x-circle",
    warning: "bi bi-exclamation-triangle"
};

function showToast(type, title, message) {
    const toast = document.createElement("div");
    toast.className = `toast-custom ${type}`;
    toast.innerHTML = `
        <i class="${toastIcons[type]} toast-icon"></i>
        <div class="toast-body">
            <div class="toast-title">${title}</div>
            <div class="toast-msg">${message}</div>
        </div>
        <i class="bi bi-x-lg toast-close"></i>
        <div class="toast-progress"></div>
    `;
    toastContainer.appendChild(toast);
    toast.querySelector(".toast-close").addEventListener("click", () => dismissToast(toast));
    setTimeout(() => dismissToast(toast), 4000);
}

function dismissToast(toast) {
    if (toast.classList.contains("hide")) return;
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 350);
}


/* 8. SPINNER EN BOTONES */
function setButtonLoading(btn, loading) {
    btn.querySelector(".btn-text").style.display    = loading ? "none" : "";
    btn.querySelector(".btn-spinner").style.display = loading ? "inline-flex" : "none";
    btn.disabled = loading;
}


/* 9. BLOQUEO POR INTENTOS */
let failedAttempts = 0;
let lockoutTimer   = null;
const MAX_ATTEMPTS = 3;
const LOCKOUT_SECS = 30;

const lockoutInfo = document.getElementById("lockout-info");
const countdownEl = document.getElementById("countdown");
const btnLogin    = document.getElementById("btn-login");

function startLockout() {
    let remaining = LOCKOUT_SECS;
    btnLogin.disabled = true;
    lockoutInfo.style.display = "flex";
    countdownEl.textContent = remaining;
    lockoutTimer = setInterval(() => {
        remaining--;
        countdownEl.textContent = remaining;
        if (remaining <= 0) {
            clearInterval(lockoutTimer);
            lockoutTimer = null; failedAttempts = 0;
            btnLogin.disabled = false;
            lockoutInfo.style.display = "none";
            showToast("success","Acceso restaurado","Ya puedes intentar iniciar sesión de nuevo.");
        }
    }, 1000);
}


/* 10. INICIAR SESIÓN */
const FAKE_USER = { email:"usuario@demo.com", password:"Demo1234!" };

btnLogin.addEventListener("click", () => {
    if (btnLogin.disabled) return;
    const email = siEmail.value.trim();
    const pass  = siPass.value;
    let hasError = false;

    if (!email) { setFieldState("si-email-wrap","si-email-error",false,"Este campo es obligatorio"); hasError=true; }
    else if (!isValidEmail(email)) { setFieldState("si-email-wrap","si-email-error",false,"El email no es válido"); hasError=true; }

    if (!pass) { setFieldState("si-pass-wrap","si-pass-error",false,"Este campo es obligatorio"); hasError=true; }
    else if (!isValidPass(pass)) { setFieldState("si-pass-wrap","si-pass-error",false,"La contraseña debe tener mínimo 8 caracteres"); hasError=true; }

    if (hasError) return;
    setButtonLoading(btnLogin, true);

    setTimeout(() => {
        setButtonLoading(btnLogin, false);
        const ok = email === FAKE_USER.email && pass === FAKE_USER.password;
        if (ok) {
            failedAttempts = 0;
            showToast("success","¡Bienvenido!","Has iniciado sesión correctamente.");
            setTimeout(closeModal, 1800);
        } else {
            failedAttempts++;
            const left = MAX_ATTEMPTS - failedAttempts;
            if (failedAttempts >= MAX_ATTEMPTS) {
                showToast("error","Demasiados intentos",`Cuenta bloqueada durante ${LOCKOUT_SECS} segundos.`);
                startLockout();
            } else {
                showToast("error","Credenciales incorrectas",
                    `Intento ${failedAttempts}/${MAX_ATTEMPTS}. ${left} intento${left>1?"s":""} restante${left>1?"s":""}.`);
            }
        }
    }, 1500);
});


/* 11. REGISTRARSE */
const btnRegister = document.getElementById("btn-register");

btnRegister.addEventListener("click", () => {
    const name  = suName.value.trim();
    const email = suEmail.value.trim();
    const pass  = suPass.value;
    let hasError = false;

    if (!name) { setFieldState("su-name-wrap","su-name-error",false,"Este campo es obligatorio"); hasError=true; }
    else if (!isValidName(name)) { setFieldState("su-name-wrap","su-name-error",false,"El nombre debe tener al menos 2 caracteres"); hasError=true; }

    if (!email) { setFieldState("su-email-wrap","su-email-error",false,"Este campo es obligatorio"); hasError=true; }
    else if (!isValidEmail(email)) { setFieldState("su-email-wrap","su-email-error",false,"El email no es válido"); hasError=true; }

    if (!pass) { setFieldState("su-pass-wrap","su-pass-error",false,"Este campo es obligatorio"); hasError=true; }
    else if (!isValidPass(pass)) { setFieldState("su-pass-wrap","su-pass-error",false,"La contraseña debe tener mínimo 8 caracteres"); hasError=true; }

    if (hasError) return;
    setButtonLoading(btnRegister, true);

    setTimeout(() => {
        setButtonLoading(btnRegister, false);
        const level = getStrengthLevel(pass);
        if (level === "weak") {
            showToast("warning","Contraseña débil","Registro exitoso, pero considera usar una contraseña más segura.");
        } else {
            showToast("success","¡Registro exitoso!",`Bienvenido, ${name}. Tu cuenta ha sido creada.`);
        }
        suName.value = suEmail.value = suPass.value = "";
        ["su-name-wrap","su-email-wrap","su-pass-wrap"].forEach(id =>
            document.getElementById(id).classList.remove("valid","invalid"));
        ["su-name-error","su-email-error","su-pass-error"].forEach(id =>
            document.getElementById(id).textContent = "");
        setStrength(null);
        setTimeout(() => goToSignIn(), 1500);
    }, 1500);
});



/* se agregó esta función para abrir el modal automáticamente si se viene de otra página con ?login=1 en la URL, y opcionalmente ir a registro con ?panel=registro -Carolina */
/* 12. ABRIR MODAL AUTOMÁTICAMENTE SI VIENE DESDE OTRO PÁGINA */
(function () {
  const params = new URLSearchParams(window.location.search);
  if (params.get('login') === '1') {
    openModal();
    if (params.get('panel') === 'registro') goToSignUp();
    else goToSignIn();
  }
})();

