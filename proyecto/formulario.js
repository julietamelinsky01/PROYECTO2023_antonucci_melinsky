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

// Agrega un evento "click" al elemento con el id "calcular-btn"
document.getElementById("calcular-btn").addEventListener("click", function() {
    // Obtiene el valor del elemento con el id "tipo-makeup"
    let tipoMakeup = document.getElementById("tipo-makeup").value;
    // Convierte a número entero el valor del elemento con el id "cantidad-personas"
    let personas = parseInt(document.getElementById("cantidad-personas").value);
    let costoPorPersona = 0;

    // Determina el costo por persona según el tipo de maquillaje seleccionado
    if (tipoMakeup === "sencillo") {
        costoPorPersona = 2000;
    } else if (tipoMakeup === "elaborado") {
        costoPorPersona = 3500;
    }

    // Calcula el costo total multiplicando el costo por persona por la cantidad de personas
    let costoTotal = costoPorPersona * personas;
    // Actualiza el contenido del elemento con el id "resultado" con el costo total
    document.getElementById("resultado").textContent = "El costo total es: $" + costoTotal;

    // Agrega un nuevo evento "click" al elemento con el id "calcular-btn"
    // Este evento no realiza ninguna acción, ya que solo obtiene el valor del elemento con el id "tipo-makeup" sin utilizarlo posteriormente
    document.getElementById("calcular-btn").addEventListener("click", function () {
        document.getElementById("tipo-makeup").value;
    });
});
// Declara la variable "bandera"
var bandera;

// Función "dibujar" que se ejecuta cuando se produce el evento
function dibujar(event) {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    // Obtiene la posición del cursor en el eje X e Y
    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    // Asigna la función al evento "onmousedown" del canvas
    canvas.onmousedown = function () {bandera = true};
    // Asigna la función al evento "onmouseup" del canvas
    canvas.onmouseup = function () {bandera = false};

    // Comprueba si la bandera está activada
    if (bandera) {
        // Dibuja un rectángulo en la posición del cursor en el canvas
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }


}



