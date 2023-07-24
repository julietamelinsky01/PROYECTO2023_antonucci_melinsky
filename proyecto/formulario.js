/**
 * Valida que todos los campos del formulario estén completos y cumplan con ciertas restricciones.
 * @method validar
 * @return {boolean} Retorna true si la validación es exitosa, de lo contrario, retorna false.
 */
function validar() {
    let nombre = document.getElementById('campox').value;
    let correo = document.getElementById('campos').value;
    let mensaje = document.getElementById('campoa').value;

    // Verificar que todos los campos estén completos
    if (nombre === '' || correo === '' || mensaje === '') {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    // Validar nombre
    if (!/^([a-zA-ZñÑáÁéÉíÍóÓúÚüÜ\s]+)$/.test(nombre)) {
        alert("Ingrese un nombre válido (solo letras y espacios).");
        return false;
    }

    // Validar correo electrónico
    if (!/^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/.test(correo)) {
        alert("Ingrese un correo electrónico válido.");
        return false;
    }

    // Validación exitosa
    return true;
}

/**
 * Calcula el costo total del maquillaje en base al tipo de maquillaje seleccionado y la cantidad de personas.
 * @method calcularCosto
 */
function calcularCosto() {
    // Obtiene el valor del elemento con el id "tipo-makeup"
    let tipoMakeup = document.getElementById("tipo-makeup").value;
    // Obtiene el valor del elemento con el id "cantidad-personas"
    let cantidadPersonasInput = document.getElementById("cantidad-personas");
    let personas = parseInt(cantidadPersonasInput.value);
    let costoPorPersona = 0;

    // Comprobar si el valor ingresado en "cantidad-personas" es válido (no negativo)
    if (personas <= 0) {
        // Indicar al usuario con un alert que el valor ingresado es incorrecto
        alert("La cantidad de personas debe ser un número mayor que cero.");
        // Blanquear el contenido del campo "cantidad-personas"
        cantidadPersonasInput.value = "";
        // Salir de la función para evitar el cálculo con un valor incorrecto
        return;
    }

    // Determina el costo por persona según el tipo de maquillaje seleccionado
    if (tipoMakeup === "sencillo") {
        costoPorPersona = 6000;
    } else if (tipoMakeup === "elaborado") {
        costoPorPersona = 9500;
    }

    // Calcula el costo total multiplicando el costo por persona por la cantidad de personas
    let costoTotal = costoPorPersona * personas;
    // Actualiza el contenido del elemento con el id "resultado" con el costo total
    document.getElementById("resultado").textContent = "El costo total es: $" + costoTotal;
}

// Declara la variable "bandera"
let bandera;

/**
 * Función que se ejecuta cuando se produce el evento "mousemove" en el canvas.
 * Dibuja un rectángulo en la posición del cursor en el canvas si la bandera está activada.
 * @method dibujar
 * @param {object} event - Evento del mouse que contiene la posición del cursor.
 */
function dibujar(event) {
    const canvas = document.getElementById("canvasAdibujar");
    const ctx = canvas.getContext("2d");

    // Obtiene la posición del cursor en el eje X e Y
    const posX = event.clientX;
    const posY = event.clientY;
    console.log(posX, posY);

    // Asigna la función al evento "onmousedown" del canvas
    canvas.onmousedown = function () {
        bandera = true;
    };
    // Asigna la función al evento "onmouseup" del canvas
    canvas.onmouseup = function () {
        bandera = false;
    };

    // Comprueba si la bandera está activada
    if (bandera) {
        // Dibuja un rectángulo en la posición del cursor en el canvas
        ctx.fillRect(posX, posY, 5, 5);
    }
}

/**
 * Borra el contenido del canvas, dejándolo en blanco.
 * @method borrarCanvas
 */
function borrarCanvas() {
    const canvas = document.getElementById("canvasAdibujar");
    const ctx = canvas.getContext("2d");
    // Limpiar el canvas, borrando todo su contenido
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
