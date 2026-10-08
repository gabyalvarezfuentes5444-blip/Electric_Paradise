// ELEMENTOS DEL FORMULARIO

var nombre = document.getElementById("nombre")
var apellido = document.getElementById("apellido")
var cantidad = document.getElementById("cantidad")
var total = document.getElementById("total")
var error = document.getElementById("error");

// ELEMENTOS DEL MODAL
var modal = document.getElementById("modal");
var modalTexto = document.getElementById("modal-texto");
var cerrarModal = document.getElementById("cerrar-modal");

// PARA CALCULAR EL TOTAL

function calcularTotal() {
    var precio = tipo.value;
    var numero = cantidad.value;
    var resultado = precio * numero;

    total.textContent = resultado + "$";
}

tipo.addEventListener("change", calcularTotal);
cantidad.addEventListener("change", calcularTotal);

// BOTÓN ENTER
var enter = document.getElementById("enter");

enter.addEventListener("click", function () {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var fecha = document.querySelector('input[name="fecha"]:checked').value;

    if (nombre === "" || apellido === "" || correo === "" || tipo.value === "0") {
        error.textContent = "Por favor completa tus datos y elige un tipo de boleto.";
        formulario.reset();
        total.textContent = "0$";
        return;
    }

    error.textContent = "";

    calcularTotal();

    modalTexto.textContent = "¡Gracias, " + nombre + "! Compraste " + cantidad.value + " boleto(s) para el " + fecha + " de diciembre. Total: " + total.textContent;
    modal.classList.add("abierto");

    formulario.reset();
    total.textContent = "0$";
});

// CERRAR EL MODAL
cerrarModal.addEventListener("click", function () {
    modal.classList.remove("abierto");
});