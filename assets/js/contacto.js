document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('form');
    const inputs = document.querySelectorAll('.custom-input');
    const checkbox = document.getElementById('terms');

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{4,30}$/,
        phone: /^\d{10}$/, // Validación de 10 dígitos para Colombia
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        mensaje: /^[\s\S]{5,500}$/
    };

    const mensajes = {
        nombre: "Usa solo letras (4-70 caracteres).",
        phone: "El número debe tener 10 dígitos (Colombia).",
        correo: "Ingresa un correo electrónico válido.",
        mensaje: "Escribe al menos 5 caracteres."
    };

    const campos = { nombre: false, phone: false, correo: false, mensaje: false };

    // Función para crear o quitar el mensaje de error visual
    const mostrarErrorVisual = (input, campo, esValido) => {
    let mensajeError = input.parentElement.querySelector('.error-data');
    
    if (!esValido) {
        input.style.border = "2px solid red";
        
        if (!mensajeError) {
            mensajeError = document.createElement('small');
            mensajeError.classList.add('error-data');
            // Estilos para que no se corra a la izquierda:
            mensajeError.style.color = "red";
            mensajeError.style.fontSize = "13px";
            mensajeError.style.fontWeight = "600";
            mensajeError.style.display = "block";
            mensajeError.style.marginTop = "8px";
            
    
            mensajeError.style.width = "100%";
            mensajeError.style.maxWidth = "420px";
            mensajeError.style.marginRight = "auto";
            mensajeError.style.marginLeft = "auto";
            mensajeError.style.textAlign = "left"; // Alinea el texto a la izquierda del bloque centrado
            
            input.parentElement.appendChild(mensajeError);
        }
        mensajeError.innerText = mensajes[campo];
    } else {
        input.style.border = "2px solid #4BB543";
        if (mensajeError) {
            mensajeError.remove();
        }
    }
};

    const validar = (e) => {
        const campo = e.target.name;
        if (expresiones[campo]) {
            const esValido = expresiones[campo].test(e.target.value);
            campos[campo] = esValido;
            mostrarErrorVisual(e.target, campo, esValido);
        }
    };

    inputs.forEach((input) => {
        input.addEventListener('keyup', validar);
        input.addEventListener('blur', validar);
    });

    formulario.addEventListener('submit', (e) => {
        // Validar todo antes de enviar
        inputs.forEach(input => {
            const esValido = expresiones[input.name].test(input.value);
            campos[input.name] = esValido;
            mostrarErrorVisual(input, input.name, esValido);
        });

        if (campos.nombre && campos.phone && campos.correo && campos.mensaje && checkbox.checked) {
            alert("¡Formulario enviado con éxito!");
        } else {
            e.preventDefault();
            if (!checkbox.checked) {
                alert("Debes aceptar los términos y condiciones.");
            }
        }
    });
});