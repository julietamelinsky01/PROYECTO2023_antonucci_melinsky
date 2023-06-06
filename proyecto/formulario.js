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

document.getElementById("calcular-btn").addEventListener("click", function() {
    let tipoMakeup = document.getElementById("tipo-makeup").value;
    let personas = parseInt(document.getElementById("cantidad-personas").value);
    let costoPorPersona = 0;

    if (tipoMakeup === "sencillo") {
        costoPorPersona = 2000;
    } else if (tipoMakeup === "elaborado") {
        costoPorPersona = 3500;
    }

    let costoTotal = costoPorPersona * personas;
    document.getElementById("resultado").textContent = "El costo total es: $" + costoTotal;
    document.getElementById("calcular-btn").addEventListener("click", function () {
        document.getElementById("tipo-makeup").value;
    });
})




